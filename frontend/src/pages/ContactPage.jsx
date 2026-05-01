import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-4xl font-bold dark:text-white font-display text-center mb-10">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-darker p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold dark:text-white mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
              <input type="text" className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input type="email" className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea rows="4" className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-primary-500 dark:text-white"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-3">Send Message</button>
          </form>
        </div>

        <div className="space-y-8 flex flex-col justify-center">
          <div className="flex items-start space-x-4">
            <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-full text-primary-600 dark:text-primary-400">
              <FiMapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white mb-1">Our Location</h3>
              <p className="text-gray-600 dark:text-gray-300">123 Fashion Avenue,<br />Lagos, Nigeria</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-full text-primary-600 dark:text-primary-400">
              <FiPhone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white mb-1">Phone Number</h3>
              <p className="text-gray-600 dark:text-gray-300">+234 800 000 0000</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-full text-primary-600 dark:text-primary-400">
              <FiMail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white mb-1">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">support@dammysessentials.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
