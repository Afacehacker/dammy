import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBox, FiShoppingBag, FiUsers, FiSettings, FiLogOut, FiPieChart } from 'react-icons/fi';

const AdminSidebar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/admin', icon: <FiPieChart /> },
    { name: 'Products', path: '/admin/products', icon: <FiBox /> },
    { name: 'Orders', path: '/admin/orders', icon: <FiShoppingBag /> },
    { name: 'Customers', path: '/admin/customers', icon: <FiUsers /> },
    { name: 'Settings', path: '/admin/settings', icon: <FiSettings /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-darker border-r border-gray-100 dark:border-gray-800 hidden md:flex flex-col fixed h-full top-0 left-0 pt-20 z-40">
      <div className="p-6 flex-grow">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Menu</h3>
        <nav className="space-y-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark hover:text-dark dark:hover:text-white'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-6 border-t border-gray-100 dark:border-gray-800">
        <button className="flex items-center space-x-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 px-4 py-3 rounded-xl w-full transition-colors">
          <FiLogOut />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
