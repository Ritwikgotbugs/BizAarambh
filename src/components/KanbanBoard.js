import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import Column from './Column';
import Task from './Task';

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    'ongoing': {
      id: 'ongoing',
      title: 'Ongoing',
      tasks: []
    },
    'done': {
      id: 'done',
      title: 'Done',
      tasks: []
    },
    'awaiting': {
      id: 'awaiting',
      title: 'Awaiting',
      tasks: []
    }
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    setColumns(columns => {
      const activeColumn = Object.values(columns).find(col => 
        col.tasks.find(task => task.id === activeId)
      );
      const overColumn = Object.values(columns).find(col =>
        col.tasks.find(task => task.id === overId) || col.id === overId
      );

      if (!activeColumn || !overColumn) return columns;

      const activeTask = activeColumn.tasks.find(task => task.id === activeId);
      const overTask = overColumn.tasks.find(task => task.id === overId);

      return {
        ...columns,
        [activeColumn.id]: {
          ...activeColumn,
          tasks: activeColumn.tasks.filter(task => task.id !== activeId)
        },
        [overColumn.id]: {
          ...overColumn,
          tasks: overTask
            ? [...overColumn.tasks, activeTask]
            : [activeTask, ...overColumn.tasks]
        }
      };
    });
  };

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          {Object.values(columns).map(column => (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={column.tasks}
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
};

export default KanbanBoard;