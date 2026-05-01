const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold dark:text-white font-display mb-8">About Dammy's Essentials</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
          Dammy's Essentials is your premier destination for luxury fashion, lifestyle accessories, and daily essentials. 
          We believe that premium quality shouldn't be a compromise, which is why we curate only the finest pieces globally.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white dark:bg-darker p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold dark:text-white mb-4">Our Quality</h3>
            <p className="text-gray-600 dark:text-gray-300">Every item in our collection is meticulously inspected to ensure it meets our rigorous standards for premium quality.</p>
          </div>
          <div className="bg-white dark:bg-darker p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold dark:text-white mb-4">Our Service</h3>
            <p className="text-gray-600 dark:text-gray-300">We offer world-class customer service with lightning-fast delivery to ensure your essentials reach you exactly when you need them.</p>
          </div>
          <div className="bg-white dark:bg-darker p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">To be the number one luxury lifestyle brand in Africa, redefining the standards of modern eCommerce.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
