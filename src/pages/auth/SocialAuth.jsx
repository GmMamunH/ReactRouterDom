import "font-awesome/css/font-awesome.min.css";

export const SocialAuth = () => {
  return (
    <>
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
    </>
  );
};
