import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiUser, FiSearch, FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const getCartCount = useCartStore((state) => state.getCartCount);
  const cartCount = getCartCount();
  const { userInfo } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-darker/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-dark dark:text-light">
          DAMMY<span className="text-primary-500">'</span>S<span className="font-light text-sm ml-2 tracking-widest uppercase">Essentials</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-primary-500 transition-colors">Shop</Link>
          <Link to="/shop?category=male" className="hover:text-primary-500 transition-colors">Men</Link>
          <Link to="/shop?category=female" className="hover:text-primary-500 transition-colors">Women</Link>
          <Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button onClick={toggleDarkMode} className="text-xl hover:text-primary-500 transition-colors">
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button className="text-xl hover:text-primary-500 transition-colors hidden md:block">
            <FiSearch />
          </button>
          {userInfo ? (
            <div className="relative group hidden md:block">
              <button className="flex items-center space-x-2 text-sm font-medium hover:text-primary-500 transition-colors">
                <FiUser className="text-xl" />
                <span>{userInfo.name.split(' ')[0]}</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-darker shadow-xl rounded-xl py-2 hidden group-hover:block border border-gray-100 dark:border-gray-800">
                {userInfo.role === 'admin' && (
                  <Link to="/admin" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark text-sm">Dashboard</Link>
                )}
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark text-sm">My Profile</Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark text-sm">My Orders</Link>
                <button 
                  onClick={() => { useAuthStore.getState().logout(); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark text-sm text-red-500"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="text-xl hover:text-primary-500 transition-colors hidden md:block">
              <FiUser />
            </Link>
          )}
          <Link to="/cart" className="text-xl hover:text-primary-500 transition-colors relative">
            <FiShoppingBag />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-darker shadow-2xl py-6 px-4 flex flex-col space-y-4 md:hidden"
          >
            <Link to="/" className="text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-800">Home</Link>
            <Link to="/shop" className="text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-800">Shop All</Link>
            <Link to="/login" className="text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-800">Account</Link>
            <div className="relative mt-4">
              <input type="text" placeholder="Search..." className="w-full bg-gray-100 dark:bg-dark p-3 rounded-lg pl-10 outline-none" />
              <FiSearch className="absolute left-3 top-4 text-gray-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
