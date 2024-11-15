export const HomePage = () => {
  return (
    <div className="bg-gray-50 pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 rounded-md">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Welcome to Our Platform
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Simplify your tasks with our innovative solutions.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
            <button className="ml-4 px-6 py-3 border border-white text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Explore our features designed to meet your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Feature 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="text-blue-600 text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold">Fast Performance</h3>
              <p className="mt-2 text-gray-600">
                Experience blazing-fast speeds with our optimized platform.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="text-green-600 text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold">Secure</h3>
              <p className="mt-2 text-gray-600">
                Your data is protected with industry-leading security.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="text-yellow-600 text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold">Easy to Use</h3>
              <p className="mt-2 text-gray-600">
                Enjoy a seamless and intuitive user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16 rounded-md">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg">
            Join thousands of users who are transforming their workflows.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
