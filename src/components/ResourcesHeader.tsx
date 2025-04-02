'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '../app/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const ResourcesHeader = () => {
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">StartKaro</span>
        </Link>

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-4">
            <Link
              href="/onboarding"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start
            </Link>
            <Link
              href="/login"
              className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default ResourcesHeader;