import { Link } from "react-router-dom";
import authLogo from "../../assets/draw2.webp";
import { SocialAuth } from "./SocialAuth";
import { useState } from "react";

export const SignIn = () => {
 
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className=" space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          Sign In
        </h2>
        <div className="flex justify-between items-center">
          <div>
            <img src={authLogo} alt="auth-logo" />
          </div>
          <div>
            <form className="mt-8 space-y-6">
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
                  required
                  className="mt-2 px-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200">
                  Sign In
                </button>
              </div>
            </form>

            {/* Toggle between Login and Signup */}
            <div className="flex justify-between gap-4 mt-4">
              <Link to="/sign-up" className="text-sm text-blue-600 ">
                Don't have an account?
                <span className="text-base text-red-700 hover:underline font-semibold ml-1">
                  Sign Up
                </span>
              </Link>

              <Link
                to="/forgot-password"
                className="text-base text-red-700 hover:underline font-semibold"
              >
                Forgot Password
              </Link>
            </div>
            {/* ======================== social auth ========================== */}
            <div>
              <SocialAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
