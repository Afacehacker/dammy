import { FiPlus, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';

const dummyProducts = [
  { _id: '1', name: 'Premium Leather Jacket', price: 150000, category: 'Male Wears', stock: 45, status: 'Active' },
  { _id: '2', name: 'Luxury Chronograph Watch', price: 85000, category: 'Wristwatches', stock: 12, status: 'Active' },
  { _id: '3', name: 'Designer Handbag', price: 120000, category: 'Bags', stock: 0, status: 'Out of Stock' },
  { _id: '4', name: 'Nike Air Max Pro', price: 95000, category: 'Shoes', stock: 24, status: 'Active' },
];

const AdminProducts = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold dark:text-white font-display">Products</h1>
        <button className="btn-primary flex items-center space-x-2">
          <FiPlus />
          <span>Add Product</span>
        </button>
      </div>

      <div className="bg-white dark:bg-darker rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:border-primary-500 dark:text-white"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="flex space-x-2 w-full sm:w-auto">
            <select className="bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 outline-none dark:text-white">
              <option>All Categories</option>
              <option>Male Wears</option>
              <option>Female Wears</option>
              <option>Shoes</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-dark text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
              {dummyProducts.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50 dark:hover:bg-dark/50 transition-colors">
                  <td className="px-6 py-4 font-medium dark:text-white flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
                    <span>{product.name}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{product.category}</td>
                  <td className="px-6 py-4 font-medium dark:text-white">₦{product.price.toLocaleString()}</td>
                  <td className="px-6 py-4 dark:text-white">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.stock > 0 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-3">
                      <button className="text-gray-400 hover:text-primary-500 transition-colors">
                        <FiEdit2 size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <FiTrash2 size={18} />
                      </button>
                    </div>
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

export default AdminProducts;
