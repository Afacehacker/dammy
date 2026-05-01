import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';
import { FiStar, FiMinus, FiPlus, FiShoppingCart, FiArrowLeft, FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, isLoading, error, fetchProductDetails } = useProductStore();
  const { addToCart } = useCartStore();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetchProductDetails(id);
  }, [fetchProductDetails, id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, qty);
      toast.success(`${product.name} added to cart`);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-10 min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-10 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">{error || 'Product not found'}</h2>
        <button onClick={() => navigate('/shop')} className="btn-primary">Back to Shop</button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 hover:text-primary-500 mb-8 transition-colors">
        <FiArrowLeft className="mr-2" /> Back
      </button>

      <div className="flex flex-col md:flex-row gap-12 bg-white dark:bg-darker rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800">
        {/* Image Gallery */}
        <div className="md:w-1/2">
          <div className="h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-dark mb-4">
            <img 
              src={product.images && product.images.length > 0 ? product.images[0].url : 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&w=800&q=80'} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-2">{product.category}</p>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white font-display mb-4 leading-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1 text-yellow-500">
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
            </div>
            <span className="text-gray-500 dark:text-gray-400">({product.numReviews || 0} Reviews)</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ₦{product.price.toLocaleString()}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {product.description || "A premium essential designed for the modern individual. Elevate your everyday style with unparalleled quality and craftsmanship."}
          </p>

          <div className="border-t border-b border-gray-100 dark:border-gray-800 py-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center justify-between bg-gray-50 dark:bg-dark rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700 w-32">
              <button 
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="text-gray-500 hover:text-primary-500 transition-colors p-2"
              >
                <FiMinus />
              </button>
              <span className="font-semibold text-lg dark:text-white">{qty}</span>
              <button 
                onClick={() => setQty(qty + 1)}
                className="text-gray-500 hover:text-primary-500 transition-colors p-2"
                disabled={product.countInStock <= qty}
              >
                <FiPlus />
              </button>
            </div>

            <button 
              onClick={handleAddToCart}
              disabled={product.countInStock === 0}
              className={`flex-1 flex items-center justify-center py-4 rounded-full font-semibold text-lg transition-all ${
                product.countInStock === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1'
              }`}
            >
              <FiShoppingCart className="mr-2" />
              {product.countInStock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>

          <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</li>
            <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Free shipping over ₦500,000</li>
            <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> 100% Original Product</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
