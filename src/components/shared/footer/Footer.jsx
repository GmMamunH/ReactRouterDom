

// export const Footer = () => {
//   const year= new Date().getUTCFullYear()
//   return (
//     <div className="bg-slate-200 py-2 fixed bottom-0 w-full">
//       <div className="max-w-screen-lg mx-auto ">
//         <p className="text-base text-black text-center">
//           © All Rights Reserved {year} | Md Mamun Hossain
//         </p>
//       </div>
//     </div>
//   );

// import { Link } from "react-router-dom";

// }
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Company Info */}
        <section className="text-center lg:text-left mb-8 lg:mb-0">
          <h3 className="text-2xl font-extrabold">RSM Innovators</h3>
          <p className="mt-2 text-sm text-gray-400">
            Providing high-quality services and innovative solutions. <br /> We
            are committed to delivering excellence.
          </p>
        </section>

        {/* Quick Links */}
        {/* <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
          <ul className="space-y-2 lg:space-y-0 lg:flex lg:space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Social Media Icons */}
        <section className="flex justify-center space-x-6 mb-8 lg:mb-0">
          <a
            href="https://facebook.com/RsmInnovators"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/gmmamunh1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/rsminnovators"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://github.com/GmMamunH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
        </section>

        {/* Contact Info */}
        <section className="text-center lg:text-left">
          <h4 className="text-lg font-medium">Contact Us</h4>
          <p className="mt-2 text-sm text-gray-400">
            Email:{" "}
            <a
              href="mailto:contact@gmmamunh.com"
              className="text-gray-400 hover:text-blue-400"
            >
              contact@rsminnovators.com
            </a>
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Phone: <span className="text-gray-400">+880 1406566242</span>
          </p>
        </section>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} RSM Innovators. All rights reserved.
      </div>
    </footer>
  );
};
