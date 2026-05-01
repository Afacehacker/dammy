import { FiSearch, FiEye } from 'react-icons/fi';

const dummyOrders = [
  { _id: 'ORD-1005', customer: 'Alice Johnson', date: 'Oct 24, 2026', total: 245000, status: 'Processing', payment: 'Paid' },
  { _id: 'ORD-1004', customer: 'Michael Smith', date: 'Oct 23, 2026', total: 85000, status: 'Shipped', payment: 'Paid' },
  { _id: 'ORD-1003', customer: 'Sarah Williams', date: 'Oct 22, 2026', total: 120000, status: 'Delivered', payment: 'Paid' },
  { _id: 'ORD-1002', customer: 'David Brown', date: 'Oct 21, 2026', total: 45000, status: 'Pending', payment: 'Unpaid' },
];

const getStatusColor = (status) => {
  switch(status) {
    case 'Delivered': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    case 'Shipped': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
    case 'Processing': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
    case 'Pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
  }
};

const AdminOrders = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold dark:text-white font-display">Orders</h1>
      </div>

      <div className="bg-white dark:bg-darker rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:border-primary-500 dark:text-white"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="flex space-x-2 w-full sm:w-auto">
            <select className="bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 outline-none dark:text-white">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-dark text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Payment</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
              {dummyOrders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50 dark:hover:bg-dark/50 transition-colors">
                  <td className="px-6 py-4 font-medium dark:text-white">{order._id}</td>
                  <td className="px-6 py-4 dark:text-white">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{order.date}</td>
                  <td className="px-6 py-4 font-medium dark:text-white">₦{order.total.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.payment === 'Paid' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {order.payment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary-600 hover:text-primary-800 dark:hover:text-primary-400 transition-colors bg-primary-50 dark:bg-primary-900/20 p-2 rounded-lg">
                      <FiEye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
