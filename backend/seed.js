require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const seedProducts = [
  {
    name: 'Premium Leather Jacket',
    description: '100% genuine leather jacket with silver hardware. Perfect for a premium look.',
    price: 150000,
    category: 'Male Wears',
    images: [{ url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80', public_id: 'sample1' }],
    countInStock: 45,
    isFeatured: true,
    rating: 4.8,
    numReviews: 24
  },
  {
    name: 'Luxury Chronograph Watch',
    description: 'Swiss made luxury watch with automatic movement and leather strap.',
    price: 85000,
    category: 'Wristwatches',
    images: [{ url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=80', public_id: 'sample2' }],
    countInStock: 12,
    isTrending: true,
    rating: 5.0,
    numReviews: 120
  },
  {
    name: 'Designer Handbag',
    description: 'Italian leather handbag with gold accents and spacious interior.',
    price: 120000,
    category: 'Bags',
    images: [{ url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80', public_id: 'sample3' }],
    countInStock: 5,
    isFeatured: true,
    rating: 4.9,
    numReviews: 56
  },
  {
    name: 'Nike Air Max Pro',
    description: 'Latest edition sports and casual wear shoes for maximum comfort.',
    price: 95000,
    category: 'Shoes',
    images: [{ url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80', public_id: 'sample4' }],
    countInStock: 24,
    isTrending: true,
    rating: 4.7,
    numReviews: 89
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB Connected. Seeding data...');
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    console.log('Data seeded successfully!');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
