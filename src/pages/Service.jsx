export const Service = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
          Our Professional Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center mb-6">
              <i className="fas fa-code text-4xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Web Development
            </h3>
            <p className="text-gray-600 mb-4">
              We create modern, responsive, and user-friendly websites tailored
              to your needs. Our web development services ensure a seamless user
              experience across all devices.
            </p>
            <a
              href="/services/web-development"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn More
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center mb-6">
              <i className="fas fa-paint-brush text-4xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              UI/UX Design
            </h3>
            <p className="text-gray-600 mb-4">
              Our design team ensures a user-centered approach, creating
              visually appealing and functional designs that enhance user
              experience and satisfaction.
            </p>
            <a
              href="/services/ui-ux-design"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn More
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center mb-6">
              <i className="fas fa-search-dollar text-4xl text-yellow-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Digital Marketing
            </h3>
            <p className="text-gray-600 mb-4">
              We offer comprehensive digital marketing services to boost your
              online presence, including SEO, social media marketing, and paid
              campaigns.
            </p>
            <a
              href="/services/digital-marketing"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn More
            </a>
          </div>

          {/* Service 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center mb-6">
              <i className="fas fa-mobile-alt text-4xl text-red-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Mobile App Development
            </h3>
            <p className="text-gray-600 mb-4">
              Our mobile app development services ensure that your app works
              seamlessly across platforms, offering intuitive interfaces and
              great functionality.
            </p>
            <a
              href="/services/mobile-app-development"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn More
            </a>
          </div>

          {/* Service 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center mb-6">
              <i className="fas fa-cloud text-4xl text-indigo-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Cloud Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              We provide cloud infrastructure, helping businesses optimize their
              operations, reduce costs, and ensure scalability for growth.
            </p>
            <a
              href="/services/cloud-solutions"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn More
            </a>
          </div>

          {/* Service 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center mb-6">
              <i className="fas fa-cogs text-4xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              IT Consulting
            </h3>
            <p className="text-gray-600 mb-4">
              Our IT consulting services help you streamline your technology
              solutions, ensuring efficient operations and strategic growth for
              your business.
            </p>
            <a
              href="/services/it-consulting"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
