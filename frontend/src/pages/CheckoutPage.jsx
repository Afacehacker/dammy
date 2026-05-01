import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import { FiCheckCircle, FiShield } from 'react-icons/fi';
import api from '../api/axios';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, getCartTotal } = useCartStore();
  const { userInfo } = useAuthStore();
  const [step, setStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Nigeria'
  });
  const [paymentMethod, setPaymentMethod] = useState('Paystack');

  useEffect(() => {
    if (!userInfo) {
      navigate('/login?redirect=/checkout');
    }
  }, [userInfo, navigate]);

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const shippingPrice = getCartTotal() > 500000 ? 0 : 5000;
  const taxPrice = getCartTotal() * 0.05; // 5% VAT
  const total = getCartTotal() + shippingPrice + taxPrice;

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        orderItems: cartItems.map(item => ({
          name: item.name,
          qty: item.qty,
          image: item.image,
          price: item.price,
          product: item._id
        })),
        shippingAddress,
        paymentMethod,
        itemsPrice: getCartTotal(),
        shippingPrice,
        taxPrice,
        totalPrice: total
      };

      const { data } = await api.post('/orders', orderData);
      alert('Order placed successfully! Redirecting to payment gateway...');
      // Clear cart
      useCartStore.getState().clearCart();
      // Navigate to order details or shop
      navigate('/shop');
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      alert(`Error: ${message}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold dark:text-white mb-8 font-display text-center">Secure Checkout</h1>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div>
        <div className="absolute top-1/2 left-0 h-1 bg-primary-500 -translate-y-1/2 z-0 transition-all duration-500" style={{ width: step === 1 ? '50%' : '100%' }}></div>
        <div className="flex justify-between relative z-10">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <span className="mt-2 text-sm font-medium dark:text-white">Shipping</span>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500 dark:bg-gray-800'}`}>2</div>
            <span className="mt-2 text-sm font-medium dark:text-white">Payment</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3">
          {step === 1 ? (
            <div className="bg-white dark:bg-darker p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Shipping Information</h2>
              <form onSubmit={handleShippingSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Street Address</label>
                    <input 
                      type="text" required
                      value={shippingAddress.street}
                      onChange={(e) => setShippingAddress({...shippingAddress, street: e.target.value})}
                      className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white"
                      placeholder="123 Main St, Apt 4B"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
                      <input 
                        type="text" required
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">State</label>
                      <input 
                        type="text" required
                        value={shippingAddress.state}
                        onChange={(e) => setShippingAddress({...shippingAddress, state: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Postal/Zip Code</label>
                      <input 
                        type="text"
                        value={shippingAddress.zipCode}
                        onChange={(e) => setShippingAddress({...shippingAddress, zipCode: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country</label>
                      <select 
                        value={shippingAddress.country}
                        onChange={(e) => setShippingAddress({...shippingAddress, country: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white"
                      >
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Kenya">Kenya</option>
                        <option value="South Africa">South Africa</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" className="mt-8 btn-primary w-full">Continue to Payment</button>
              </form>
            </div>
          ) : (
            <div className="bg-white dark:bg-darker p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Payment Method</h2>
              <div className="space-y-4">
                <label className={`block border rounded-xl p-4 cursor-pointer transition-all ${paymentMethod === 'Paystack' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="Paystack" 
                      checked={paymentMethod === 'Paystack'} 
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-3 font-semibold dark:text-white">Paystack (Card / Bank Transfer)</span>
                  </div>
                </label>
                <label className={`block border rounded-xl p-4 cursor-pointer transition-all ${paymentMethod === 'Flutterwave' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="Flutterwave" 
                      checked={paymentMethod === 'Flutterwave'} 
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-3 font-semibold dark:text-white">Flutterwave</span>
                  </div>
                </label>
              </div>
              <div className="mt-8 flex gap-4">
                <button onClick={() => setStep(1)} className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-dark transition-colors">Back</button>
                <button onClick={handlePlaceOrder} className="flex-1 btn-primary">Place Order Securely</button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white dark:bg-darker rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sticky top-24">
            <h2 className="text-xl font-bold dark:text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md bg-gray-100" />
                    <div>
                      <p className="font-medium dark:text-white line-clamp-1">{item.name}</p>
                      <p className="text-gray-500">Qty: {item.qty}</p>
                    </div>
                  </div>
                  <span className="font-medium dark:text-white">₦{(item.price * item.qty).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-medium dark:text-white">₦{getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium dark:text-white">{shippingPrice === 0 ? 'Free' : `₦${shippingPrice.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (5%)</span>
                <span className="font-medium dark:text-white">₦{taxPrice.toLocaleString()}</span>
              </div>
              
              <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-4 flex justify-between items-center text-lg font-bold">
                <span className="dark:text-white">Total</span>
                <span className="text-primary-600 dark:text-primary-400">₦{total.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10 py-3 rounded-lg">
              <FiShield />
              <span className="font-medium">SSL Encrypted Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
