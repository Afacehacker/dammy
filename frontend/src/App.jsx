import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import NotFound from './pages/NotFound';

import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import MyOrdersPage from './pages/MyOrdersPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-light dark:bg-darker transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/orders" element={<MyOrdersPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminDashboard />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
}

export default App;
