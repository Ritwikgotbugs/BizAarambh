'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { auth, db } from '@/app/firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import KanbanBoard from '@/components/KanbanBoard';

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isCorporateUser, setIsCorporateUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Fetch user type from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setIsCorporateUser(userDoc.data().isCorporateUser || false);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="relative min-h-screen">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
          <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
            Loading...
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-4 z-[100]">
        {user ? (
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors dark:focus:ring-offset-gray-800"
          >
            Logout
          </button>
        ) : (
          <Link 
            href="/signup" 
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors dark:focus:ring-offset-gray-800"
          >
            Sign Up
          </Link>
        )}
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          {isCorporateUser ? 'Corporate Dashboard' : 'User Dashboard'}
        </h3>
        
        {isCorporateUser ? (
          <KanbanBoard />
        ) : (
          <div className="text-gray-600 dark:text-gray-300">
            Welcome to your personal dashboard
          </div>
        )}
      </div>
    </div>
  );
}
  