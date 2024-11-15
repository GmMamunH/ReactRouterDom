import { useState } from "react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 py-20">
      {/* Contact Header */}
      <section className="bg-blue-600 text-white py-20 rounded-md">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl">
            We're here to assist you. Reach out to us for any inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Contact Form
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Fill out the form below and we’ll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-gray-800 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Contact Info
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Get in touch with us directly through the following channels:
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="mt-2 text-gray-600">
               RSM Garden <br />Afra, Basundia-7406, Narail,<br /> Dhaka, Bangladesh
              </p>
            </div>

            {/* Phone Number */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="mt-2 text-gray-600">+880 1406566242</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="mt-2 text-gray-600"> contact@rsminnovators.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Find Us On The Map
          </h2>
          <div className="mt-6">
            {/* You can replace this with an actual Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799170218!2d-74.25987703610427!3d40.6976700634825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1553fe62fb%3A0xf0a846f99d1b3966!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1601416353352!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
