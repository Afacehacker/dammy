import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

const ProfilePage = () => {
  const { userInfo } = useAuthStore();
  const [name, setName] = useState(userInfo?.name || '');
  const [email, setEmail] = useState(userInfo?.email || '');
  const [phone, setPhone] = useState(userInfo?.phoneNumber || '');

  const submitHandler = (e) => {
    e.preventDefault();
    alert('Profile update functionality coming soon!');
  };

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white dark:bg-darker p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
        <h1 className="text-3xl font-bold dark:text-white mb-6 font-display">My Profile</h1>
        
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
              <input 
                type="text" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white"
                placeholder="+234..."
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full md:w-auto px-8">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
