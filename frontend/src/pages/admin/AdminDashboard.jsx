import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminOverview from './AdminOverview';
import AdminProducts from './AdminProducts';
import AdminOrders from './AdminOrders';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark relative">
      <AdminSidebar />
      <div className="flex-1 md:ml-64 p-6 md:p-10 transition-all duration-300 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="/products" element={<AdminProducts />} />
            <Route path="/orders" element={<AdminOrders />} />
            <Route path="/customers" element={<div className="text-2xl font-bold dark:text-white">Customers Management (Coming Soon)</div>} />
            <Route path="/settings" element={<div className="text-2xl font-bold dark:text-white">Admin Settings (Coming Soon)</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
