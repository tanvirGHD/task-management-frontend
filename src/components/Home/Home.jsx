import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Key Features Data
  const features = [
    {
      icon: '📋',
      title: 'Task Organization',
      description: 'Easily create, prioritize, and track tasks.',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      hoverColor: 'hover:bg-blue-100',
    },
    {
      icon: '👥',
      title: 'Collaboration',
      description: 'Work seamlessly with your team in real-time.',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      hoverColor: 'hover:bg-green-100',
    },
    {
      icon: '⏰',
      title: 'Reminders & Deadlines',
      description: 'Never miss a deadline with smart reminders.',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      hoverColor: 'hover:bg-purple-100',
    },
  ];

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#3388c5] py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Organize Your Tasks, Boost Your Productivity
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
          Simple, Intuitive, and Powerful Task Management Tool for Teams and Individuals.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/taskFrom"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get Started for Free
          </Link>
          <a
            href="#"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`${feature.bgColor} ${feature.hoverColor} p-6 rounded-lg shadow-lg text-center cursor-pointer`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <div className={`${feature.iconColor} text-4xl mb-4`}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-4xl mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Sign Up</h3>
              <p className="text-gray-600">Create your free account in seconds.</p>
            </motion.div>
            {/* Step 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-4xl mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Add Tasks</h3>
              <p className="text-gray-600">Organize your tasks with lists, deadlines, and priorities.</p>
            </motion.div>
            {/* Step 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-4xl mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Get Things Done</h3>
              <p className="text-gray-600">Track progress and achieve your goals.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">"This tool has transformed how my team works. Highly recommended!"</p>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-gray-600">Project Manager</p>
                </div>
              </div>
            </motion.div>
            {/* Testimonial 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">"Simple yet powerful. Perfect for managing my daily tasks!"</p>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Jane Smith</h4>
                  <p className="text-gray-600">Freelancer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;