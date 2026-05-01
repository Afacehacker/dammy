import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-toastify';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ShopPage = () => {
  const query = useQuery();
  const category = query.get('category') || '';
  
  const { products, isLoading, error, fetchProducts } = useProductStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    fetchProducts('', category);
  }, [fetchProducts, category]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white font-display capitalize">
          {category ? `${category} Collection` : 'All Products'}
        </h1>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1,2,3,4,5,6,7,8].map(n => (
            <div key={n} className="animate-pulse">
              <div className="bg-gray-200 dark:bg-gray-800 h-80 rounded-2xl mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-2"></div>
              <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-10">{error}</div>
      ) : products.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold dark:text-white">No products found.</h2>
          <p className="text-gray-500 mt-2">Try checking back later or browse other categories.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id} className="group relative bg-white dark:bg-darker rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl">
              <Link to={`/product/${product._id}`} className="block relative h-64 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-dark">
                <img 
                  src={product.images && product.images.length > 0 ? product.images[0].url : 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&w=500&q=80'} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1 text-sm font-medium shadow-sm">
                  <FiStar className="text-yellow-500 fill-current" />
                  <span>{product.rating}</span>
                </div>
              </Link>
              <div>
                <h3 className="font-semibold text-lg dark:text-white mb-1 line-clamp-1">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-primary-600 dark:text-primary-400 font-bold text-lg">₦{product.price.toLocaleString()}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all transform hover:scale-110"
                  >
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
