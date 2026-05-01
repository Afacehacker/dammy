import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { Link, useNavigate } from 'react-router-dom';

const MyOrdersPage = () => {
  const { userInfo } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login?redirect=/orders');
    }
  }, [userInfo, navigate]);

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold dark:text-white mb-8 font-display">My Orders</h1>
      
      <div className="bg-white dark:bg-darker p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-center py-20">
        <div className="w-20 h-20 bg-gray-100 dark:bg-dark rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold dark:text-white mb-4">No orders yet</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">You haven't placed any orders yet. Start shopping to see your history.</p>
        <Link to="/shop" className="btn-primary">Browse Products</Link>
      </div>
    </div>
  );
};

export default MyOrdersPage;
