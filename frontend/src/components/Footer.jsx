import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-darker text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-white mb-6 block">
              DAMMY<span className="text-primary-500">'</span>S<span className="font-light text-sm ml-2 tracking-widest uppercase">Essentials</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Your premium destination for fashion, accessories, and daily essentials. Elevating your lifestyle with top-tier products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <FiInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <FiFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="hover:text-primary-400 transition-colors">Shop All</Link></li>
              <li><Link to="/shop?category=male" className="hover:text-primary-400 transition-colors">Men's Fashion</Link></li>
              <li><Link to="/shop?category=female" className="hover:text-primary-400 transition-colors">Women's Fashion</Link></li>
              <li><Link to="/shop?category=accessories" className="hover:text-primary-400 transition-colors">Accessories</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Customer Service</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary-400 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/track" className="hover:text-primary-400 transition-colors">Track Order</Link></li>
              <li><Link to="/terms" className="hover:text-primary-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-primary-500 mt-1 flex-shrink-0" />
                <span>SY8 along school road Oye-Ekiti</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-500 flex-shrink-0" />
                <span>09133358775, 09114107327</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-500 flex-shrink-0" />
                <span>joydammy21@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dammy's Essentials. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
