import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Calendar,
  Tag,
  Clock,
  MoreHorizontal,
  Trash2,
  Edit,
} from "lucide-react";
import { db } from "../firebase/config";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
  tags?: string[];
  createdAt: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const KanbanBoard = () => {
  const [columns, setColumns] = useState<{ [key: string]: Column }>({
    todo: {
      id: "todo",
      title: "TODO",
      tasks: [],
    },
    active: {
      id: "active",
      title: "Active",
      tasks: [],
    },
    inProgress: {
      id: "inProgress",
      title: "In Progress",
      tasks: [],
    },
    completed: {
      id: "completed",
      title: "Completed",
      tasks: [],
    },
  });

  // Task modal state
  const [showModal, setShowModal] = useState(false);
  const [currentColumn, setCurrentColumn] = useState("todo");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: "",
    description: "",
    priority: "medium",
    dueDate: new Date().toISOString().split("T")[0],
    tags: [],
  });

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState<string | null>(null);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showTaskMenu, setShowTaskMenu] = useState<string | null>(null);
  const [newTag, setNewTag] = useState("");

  // Load data from Firebase on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to the kanban document in Firestore
        const kanbanRef = doc(db, "kanban", "columns");

        // Set up a real-time listener for changes
        const unsubscribe = onSnapshot(kanbanRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            if (data.columns) {
              setColumns(data.columns);

              // Extract all unique tags from tasks
              const tags = new Set<string>();
              Object.values(data.columns).forEach((column: Column) => {
                column.tasks.forEach((task) => {
                  if (task.tags) {
                    task.tags.forEach((tag) => tags.add(tag));
                  }
                });
              });
              setAvailableTags(Array.from(tags));
            }
          } else {
            // If document doesn't exist, create it with default columns
            const defaultColumns = {
              todo: {
                id: "todo",
                title: "TODO",
                tasks: [],
              },
              active: {
                id: "active",
                title: "Active",
                tasks: [],
              },
              inProgress: {
                id: "inProgress",
                title: "In Progress",
                tasks: [],
              },
              completed: {
                id: "completed",
                title: "Completed",
                tasks: [],
              },
            };
            setDoc(kanbanRef, { columns: defaultColumns });
          }
        });

        // Clean up the listener when component unmounts
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);

        // Fallback to localStorage if Firebase fails
        const savedColumns = localStorage.getItem("kanbanColumns");
        if (savedColumns) {
          setColumns(JSON.parse(savedColumns));
        }
      }
    };

    fetchData();
  }, []);

  // Save data to Firebase whenever columns change
  useEffect(() => {
    const saveToFirebase = async () => {
      try {
        const kanbanRef = doc(db, "kanban", "columns");

        // Check if document exists first
        const docSnap = await getDoc(kanbanRef);

        if (docSnap.exists()) {
          await updateDoc(kanbanRef, { columns });
        } else {
          await setDoc(kanbanRef, { columns });
        }
      } catch (error) {
        console.error("Error saving to Firebase:", error);

        // Fallback to localStorage
        localStorage.setItem("kanbanColumns", JSON.stringify(columns));
      }
    };

    // Skip the initial render
    if (Object.values(columns).some((column) => column.tasks.length > 0)) {
      // Debounce the save operation to avoid too many writes
      const timeoutId = setTimeout(() => {
        saveToFirebase();
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [columns]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: string,
    sourceColumn: string
  ) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("sourceColumn", sourceColumn);
    e.currentTarget.classList.add("opacity-50", "scale-105");
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("opacity-50", "scale-105");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add("bg-blue-50");
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("bg-blue-50");
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetColumn: string
  ) => {
    e.preventDefault();
    e.currentTarget.classList.remove("bg-blue-50");
    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumn = e.dataTransfer.getData("sourceColumn");

    if (sourceColumn === targetColumn) return;

    setColumns((prev) => {
      const task = prev[sourceColumn].tasks.find((t) => t.id === taskId);
      if (!task) return prev;

      const newColumns = {
        ...prev,
        [sourceColumn]: {
          ...prev[sourceColumn],
          tasks: prev[sourceColumn].tasks.filter((t) => t.id !== taskId),
        },
        [targetColumn]: {
          ...prev[targetColumn],
          tasks: [...prev[targetColumn].tasks, task],
        },
      };

      return newColumns;
    });
  };

  const openAddTaskModal = (columnId: string) => {
    setCurrentColumn(columnId);
    setEditingTask(null);
    setNewTask({
      title: "",
      description: "",
      priority: "medium",
      dueDate: new Date().toISOString().split("T")[0],
      tags: [],
    });
    setShowModal(true);
  };

  const openEditTaskModal = (columnId: string, task: Task) => {
    setCurrentColumn(columnId);
    setEditingTask(task);
    setNewTask({
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      tags: task.tags || [],
    });
    setShowModal(true);
  };

  const handleSaveTask = () => {
    if (!newTask.title) return;

    if (editingTask) {
      // Edit existing task
      setColumns((prev) => ({
        ...prev,
        [currentColumn]: {
          ...prev[currentColumn],
          tasks: prev[currentColumn].tasks.map((task) =>
            task.id === editingTask.id
              ? {
                  ...task,
                  title: newTask.title || "",
                  description: newTask.description || "",
                  priority: newTask.priority as "low" | "medium" | "high",
                  dueDate:
                    newTask.dueDate || new Date().toISOString().split("T")[0],
                  tags: newTask.tags || [],
                }
              : task
          ),
        },
      }));
    } else {
      // Add new task
      setColumns((prev) => ({
        ...prev,
        [currentColumn]: {
          ...prev[currentColumn],
          tasks: [
            ...prev[currentColumn].tasks,
            {
              id: Date.now().toString(),
              title: newTask.title || "",
              description: newTask.description || "",
              priority: newTask.priority as "low" | "medium" | "high",
              dueDate:
                newTask.dueDate || new Date().toISOString().split("T")[0],
              tags: newTask.tags || [],
              createdAt: new Date().toISOString(),
            },
          ],
        },
      }));
    }

    setShowModal(false);
  };

  const deleteTask = (columnId: string, taskId: string) => {
    setColumns((prev) => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        tasks: prev[columnId].tasks.filter((task) => task.id !== taskId),
      },
    }));
    setShowTaskMenu(null);
  };

  const addTagToTask = () => {
    if (!newTag.trim()) return;

    setNewTask((prev) => ({
      ...prev,
      tags: [...(prev.tags || []), newTag.trim()],
    }));

    setNewTag("");
  };

  const removeTagFromTask = (tagToRemove: string) => {
    setNewTask((prev) => ({
      ...prev,
      tags: (prev.tags || []).filter((tag) => tag !== tagToRemove),
    }));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-rose-50 text-rose-700 border border-rose-200";
      case "medium":
        return "bg-amber-50 text-amber-700 border border-amber-200";
      case "low":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";
      default:
        return "bg-slate-50 text-slate-700 border border-slate-200";
    }
  };

  const getColumnColor = (columnId: string) => {
    switch (columnId) {
      case "todo":
        return "from-slate-50 to-slate-100";
      case "active":
        return "from-blue-50 to-blue-100";
      case "inProgress":
        return "from-indigo-50 to-indigo-100";
      case "completed":
        return "from-emerald-50 to-emerald-100";
      default:
        return "from-gray-50 to-gray-100";
    }
  };

  const getTaskBorderColor = (columnId: string) => {
    switch (columnId) {
      case "todo":
        return "border-slate-300";
      case "active":
        return "border-blue-300";
      case "inProgress":
        return "border-indigo-300";
      case "completed":
        return "border-emerald-300";
      default:
        return "border-gray-300";
    }
  };

  // Filter tasks based on search term, priority, and tags
  const getFilteredTasks = (tasks: Task[]) => {
    return tasks.filter((task) => {
      const matchesSearch =
        searchTerm === "" ||
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPriority =
        filterPriority === null || task.priority === filterPriority;

      const matchesTag =
        selectedTag === null || (task.tags && task.tags.includes(selectedTag));

      return matchesSearch && matchesPriority && matchesTag;
    });
  };

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString();
    }
  };

  // Check if a task is overdue
  const isOverdue = (dueDate: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = new Date(dueDate);
    return taskDate < today;
  };

  return (
    <div className="absolute inset-x-0 top-[64px] bottom-0 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Search and filter bar */}
      <div className="p-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search tasks..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative">
              <select
                value={filterPriority || ""}
                onChange={(e) => setFilterPriority(e.target.value || null)}
                className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none"
              >
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {availableTags.length > 0 && (
              <div className="relative">
                <select
                  value={selectedTag || ""}
                  onChange={(e) => setSelectedTag(e.target.value || null)}
                  className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none"
                >
                  <option value="">All Tags</option>
                  {availableTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <Tag className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setSearchTerm("");
                setFilterPriority(null);
                setSelectedTag(null);
              }}
              className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 border border-gray-300 transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="h-[calc(100%-64px)] overflow-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full min-w-max">
          {Object.values(columns).map((column) => {
            const filteredTasks = getFilteredTasks(column.tasks);

            return (
              <div
                key={column.id}
                className={`bg-gradient-to-b ${getColumnColor(
                  column.id
                )} p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 flex flex-col h-full min-w-[300px]`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, column.id)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg text-gray-700">
                    {column.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="bg-white text-xs font-medium px-2 py-1 rounded-full shadow-sm border border-gray-200">
                      {filteredTasks.length}
                    </span>
                    {filteredTasks.length !== column.tasks.length && (
                      <span className="text-xs text-gray-500">
                        of {column.tasks.length}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  className="w-full bg-white text-gray-700 px-3 py-2 rounded-md mb-4 shadow-sm hover:shadow transition-shadow flex items-center justify-center space-x-1 border border-gray-200 hover:bg-gray-50"
                  onClick={() => openAddTaskModal(column.id)}
                >
                  <span>+</span>
                  <span>New Task</span>
                </button>

                <div className="space-y-3 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  {filteredTasks.map((task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={(e) =>
                        handleDragStart(e, task.id, column.id)
                      }
                      onDragEnd={handleDragEnd}
                      className={`bg-white p-4 rounded-md shadow-sm hover:shadow transition-all duration-200 border-l-4 ${getTaskBorderColor(
                        column.id
                      )} transform hover:-translate-y-1 cursor-pointer relative group`}
                    >
                      <div className="flex justify-between items-start">
                        <h4
                          className="font-medium text-gray-800"
                          onClick={() => openEditTaskModal(column.id, task)}
                        >
                          {task.title}
                        </h4>
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowTaskMenu(
                                showTaskMenu === task.id ? null : task.id
                              );
                            }}
                            className="p-1 rounded-full hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <MoreHorizontal className="h-4 w-4 text-gray-500" />
                          </button>

                          {showTaskMenu === task.id && (
                            <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                              <div className="py-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openEditTaskModal(column.id, task);
                                    setShowTaskMenu(null);
                                  }}
                                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteTask(column.id, task.id);
                                  }}
                                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <p
                        className="text-sm text-gray-600 mt-1 line-clamp-2"
                        onClick={() => openEditTaskModal(column.id, task)}
                      >
                        {task.description}
                      </p>

                      {task.tags && task.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {task.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-100">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-md ${getPriorityColor(
                            task.priority
                          )}`}
                        >
                          {task.priority}
                        </span>
                        <span
                          className={`text-xs flex items-center gap-1 ${
                            isOverdue(task.dueDate)
                              ? "text-red-500"
                              : "text-gray-500"
                          }`}
                        >
                          <Calendar className="h-3 w-3" />
                          {formatDate(task.dueDate)}
                        </span>
                      </div>
                    </div>
                  ))}

                  {filteredTasks.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-32 text-gray-400 text-sm">
                      <p>No tasks found</p>
                      {(searchTerm || filterPriority || selectedTag) && (
                        <button
                          onClick={() => {
                            setSearchTerm("");
                            setFilterPriority(null);
                            setSelectedTag(null);
                          }}
                          className="mt-2 text-blue-500 hover:underline"
                        >
                          Clear filters
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Task Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-zinc-900 bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              {editingTask ? "Edit Task" : "Add New Task"}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Task title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Task description"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  value={newTask.priority}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      priority: e.target.value as "low" | "medium" | "high",
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Due Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) =>
                      setNewTask({ ...newTask, dueDate: e.target.value })
                    }
                    className="w-full p-2 pl-3 pr-10 border border-gray-300 rounded-md cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    style={{ colorScheme: "light" }}
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => {
                      const dateInput =
                        document.querySelector('input[type="date"]');
                      if (dateInput) {
                        (dateInput as HTMLElement).click();
                        (dateInput as HTMLElement).focus();
                      }
                    }}
                  >
                    <Calendar className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <div className="flex flex-wrap gap-1 mb-2">
                  {newTask.tags &&
                    newTask.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200 flex items-center"
                      >
                        {tag}
                        <button
                          onClick={() => removeTagFromTask(tag)}
                          className="ml-1 text-blue-700 hover:text-blue-900"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Add a tag"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTagToTask();
                      }
                    }}
                  />
                  <button
                    onClick={addTagToTask}
                    className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 border border-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTask}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {editingTask ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;
