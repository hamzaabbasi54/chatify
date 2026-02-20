import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { Toaster } from 'react-hot-toast'
import Chatpage from './pages/Chat.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { useAuthStore } from './store/useAuthStore.js'

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-cyan-400"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      {/* DECORATORS - GRID BG & GLOW SHAPES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px] pointer-events-none" />

      <Routes>
        <Route path="/" element={authUser ? <Chatpage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/" />} />
      </Routes>
    </div>
  )
}
export default App