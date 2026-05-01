import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from 'react-icons/fi';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCartStore();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-gray-100 dark:bg-dark rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-center max-w-md">
          Looks like you haven't added anything to your cart yet. Discover our premium collections and find something you love.
        </p>
        <Link to="/shop" className="btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold dark:text-white mb-8 font-display">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3">
          <div className="bg-white dark:bg-darker rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid grid-cols-6 gap-4 p-6 border-b border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <div className="col-span-3">Product</div>
              <div className="col-span-1 text-center">Quantity</div>
              <div className="col-span-1 text-center">Total</div>
              <div className="col-span-1 text-center">Action</div>
            </div>

            {/* Cart Items */}
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {cartItems.map((item) => (
                <div key={item._id} className="p-6 flex flex-col md:grid md:grid-cols-6 items-center gap-4">
                  <div className="col-span-3 flex items-center space-x-4 w-full">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-100" />
                    <div>
                      <Link to={`/product/${item._id}`} className="font-semibold text-lg dark:text-white hover:text-primary-500 transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">₦{item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="col-span-1 flex items-center justify-center w-full md:w-auto mt-4 md:mt-0">
                    <div className="flex items-center space-x-3 bg-gray-50 dark:bg-dark rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700">
                      <button 
                        onClick={() => updateQuantity(item._id, Math.max(1, item.qty - 1))}
                        className="text-gray-500 hover:text-primary-500 transition-colors p-1"
                        disabled={item.qty <= 1}
                      >
                        <FiMinus />
                      </button>
                      <span className="font-medium w-6 text-center dark:text-white">{item.qty}</span>
                      <button 
                        onClick={() => updateQuantity(item._id, item.qty + 1)}
                        className="text-gray-500 hover:text-primary-500 transition-colors p-1"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1 text-center font-semibold dark:text-white w-full md:w-auto mt-2 md:mt-0">
                    ₦{(item.price * item.qty).toLocaleString()}
                  </div>

                  <div className="col-span-1 flex justify-center w-full md:w-auto mt-2 md:mt-0">
                    <button 
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-500/10"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white dark:bg-darker rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sticky top-24">
            <h2 className="text-xl font-bold dark:text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)</span>
                <span className="font-medium dark:text-white">₦{getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Estimate</span>
                <span className="font-medium dark:text-white">Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="font-medium dark:text-white">₦0</span>
              </div>
              
              <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-4 flex justify-between items-center text-lg font-bold">
                <span className="dark:text-white">Total</span>
                <span className="text-primary-600 dark:text-primary-400">₦{getCartTotal().toLocaleString()}</span>
              </div>
            </div>

            <Link to="/checkout" className="w-full btn-primary flex items-center justify-center">
              Proceed to Checkout <FiArrowRight className="ml-2" />
            </Link>
            
            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
              <FiShield />
              <span>Secure checkout provided by Paystack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
