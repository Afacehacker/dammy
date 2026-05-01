import { FiDollarSign, FiShoppingBag, FiUsers, FiActivity } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 5000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 8900 },
  { name: 'Sat', sales: 12000 },
  { name: 'Sun', sales: 15000 },
];

const StatCard = ({ title, value, icon, trend, positive }) => (
  <div className="bg-white dark:bg-darker p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold dark:text-white">{value}</h3>
      </div>
      <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl text-primary-600 dark:text-primary-400">
        {icon}
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <span className={`font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
        {trend}
      </span>
      <span className="text-gray-500 dark:text-gray-400 ml-2">vs last week</span>
    </div>
  </div>
);

const AdminOverview = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-white mb-8 font-display">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Revenue" value="₦2,450,000" icon={<FiDollarSign size={24} />} trend="+15.3%" positive={true} />
        <StatCard title="Total Orders" value="342" icon={<FiShoppingBag size={24} />} trend="+8.2%" positive={true} />
        <StatCard title="Active Users" value="1,240" icon={<FiUsers size={24} />} trend="+24.5%" positive={true} />
        <StatCard title="Conversion Rate" value="4.8%" icon={<FiActivity size={24} />} trend="-1.2%" positive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-darker p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold dark:text-white mb-6">Revenue Analytics</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₦${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#8b5cf6' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-darker p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold dark:text-white mb-6">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-dark rounded-xl transition-colors cursor-pointer border border-transparent dark:hover:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-bold dark:text-white">
                    JD
                  </div>
                  <div>
                    <p className="font-medium dark:text-white text-sm">John Doe</p>
                    <p className="text-xs text-gray-500">Order #100{i}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm dark:text-white">₦150,000</p>
                  <p className="text-xs text-yellow-500 font-medium">Pending</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
