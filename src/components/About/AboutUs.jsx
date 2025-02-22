import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="pt-7 pb-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#3388c5] mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side: Text Content */}
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-600">
              We are a passionate team dedicated to helping you manage your tasks efficiently and
              effectively. Our mission is to provide a simple, intuitive, and powerful task
              management tool for individuals and teams.
            </p>
            <p className="text-lg text-gray-600">
              With years of experience in productivity tools, we understand the challenges of
              staying organized. That's why we built Taskify – to make your life easier and your
              workflow smoother.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Easy-to-use interface</li>
              <li>Real-time collaboration</li>
              <li>Smart reminders and deadlines</li>
              <li>Cross-platform sync</li>
            </ul>
          </motion.div>

          {/* Right Side: Google Map */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            variants={fadeInUp}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.862244220786!2d90.3882773154311!3d23.750911884589174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1632922345678!5m2!1sen!2sbd"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;