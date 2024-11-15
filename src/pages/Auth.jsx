import { useState } from "react";
import "font-awesome/css/font-awesome.min.css";


export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (login/signup)
    console.log(formData);
  };

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          {isLogin ? "Sign In" : "Sign Up"}
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 px-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 px-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Toggle between Login and Signup */}
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleAuthMode}
            className="text-sm text-blue-600 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </button>
        </div>

        {/* Social Login Section */}
        <div className="mt-8 space-y-4">
          <p className="text-center text-gray-600">Or sign in with</p>

          <div className="flex justify-center space-x-4">
            {/* Google Login */}
            <button
              type="button"
              className="w-full py-2 px-4 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-200"
            >
              <i className="fab fa-google mr-2"></i> Google
            </button>

            {/* Facebook Login */}
            <button
              type="button"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
            >
              <i className="fab fa-facebook mr-2"></i> Facebook
            </button>

            {/* GitHub Login */}
            <button
              type="button"
              className="w-full py-2 px-4 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-900 transition duration-200"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
