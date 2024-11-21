import { Link } from "react-router-dom";
import authLogo from "../../assets/draw2.webp";
import { SocialAuth } from "./SocialAuth";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { signUpWithEmailAndPassword } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmailAndPassword(name, email, password);
      toast.success(
        "Signed up successfully, Please verify your email before logging in.",
        {
          onClose: () => Navigate("/sign-in"),
          toastId: "success2",
        }
      );
    } catch (error) {
      toast.error(`An error occurred during signup: ${error.message}`);
    }
  };
  return (
    <>
      <div className="max-w-screen-lg mx-auto bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 flex-col">
        <div className="z-50">
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
          />
        </div>
        <div className=" space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            Sign Up
          </h2>
          <div className="flex justify-between items-center">
            <div>
              <img src={authLogo} alt="auth-logo" />
            </div>
            <div>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 px-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-2 px-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200">
                    Sign Up
                  </button>
                </div>
              </form>

              {/* Toggle between Login and Signup */}
              <div className="flex justify-center mt-4">
                <Link to="/sign-in" className="text-sm text-blue-600">
                  Already have an account?{" "}
                  <span className="text-base text-red-700 hover:underline font-semibold">
                    Sign In
                  </span>
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
    </>
  );
};
