import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import KanbanBoard from './KanbanBoard';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [isCorporateUser, setIsCorporateUser] = useState(false);

  useEffect(() => {
    const fetchUserType = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setIsCorporateUser(userDoc.data().isCorporateUser);
        }
      }
    };
    fetchUserType();
  }, [user]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {isCorporateUser ? (
        <KanbanBoard />
      ) : (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Welcome to your dashboard!</h2>
          {/* Regular user dashboard content will go here */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;