import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar, FiTruck, FiShield, FiClock } from 'react-icons/fi';

const categories = [
  { name: 'Male Wears', image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=500&q=80', query: 'male' },
  { name: 'Female Wears', image: 'https://images.unsplash.com/photo-1515347619362-7104b2ee598a?auto=format&fit=crop&w=500&q=80', query: 'female' },
  { name: 'Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80', query: 'shoes' },
  { name: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80', query: 'jewelry' },
  { name: 'Bags', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80', query: 'bags' },
  { name: 'Soft Drinks & Snacks', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=500&q=80', query: 'drinks' },
];

const featuredProducts = [
  { _id: '1', name: 'Premium Leather Jacket', price: 150000, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80', rating: 4.8 },
  { _id: '2', name: 'Luxury Chronograph Watch', price: 85000, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=80', rating: 5.0 },
  { _id: '3', name: 'Designer Handbag', price: 120000, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80', rating: 4.9 },
  { _id: '4', name: 'Nike Air Max Pro', price: 95000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80', rating: 4.7 },
];

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/40 dark:bg-darker/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            Redefine Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Lifestyle</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light text-gray-200"
          >
            Discover premium collections of fashion, accessories, and essentials curated for the modern elite.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/shop" className="btn-primary w-full sm:w-auto text-lg px-8 py-4 flex items-center justify-center">
              Shop Collection <FiArrowRight className="ml-2" />
            </Link>
            <Link to="/shop?trending=true" className="w-full sm:w-auto text-lg px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full font-medium transition-all">
              View Trending
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white dark:bg-darker">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-4 p-6 glass-card rounded-2xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl">
                <FiTruck />
              </div>
              <div>
                <h3 className="font-semibold text-lg dark:text-white">Fast Delivery</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Nationwide express shipping</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 glass-card rounded-2xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl">
                <FiShield />
              </div>
              <div>
                <h3 className="font-semibold text-lg dark:text-white">Secure Payments</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">100% protected transactions</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 glass-card rounded-2xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl">
                <FiClock />
              </div>
              <div>
                <h3 className="font-semibold text-lg dark:text-white">24/7 Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Always here to help you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-2">Shop by Category</h2>
              <p className="text-gray-500 dark:text-gray-400">Explore our wide range of premium collections</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-primary-600 font-medium hover:underline">
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <Link 
                key={idx} 
                to={`/shop?category=${cat.query}`}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-medium text-lg text-center">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20 bg-white dark:bg-darker">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">Trending Now</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Handpicked selection of our most sought-after premium products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product._id} className="group relative">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-dark">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1 text-sm font-medium">
                    <FiStar className="text-yellow-500 fill-current" />
                    <span>{product.rating}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full btn-primary py-3 rounded-xl">Add to Cart</button>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white mb-1">{product.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-bold">₦{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
