export const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          About Us
        </h2>

        {/* Company Description Section */}
        <div className="lg:flex justify-between mb-16">
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to delivering innovative solutions that make a
              difference. Our mission is to provide exceptional service and
              create lasting relationships with our clients through excellence,
              integrity, and professionalism.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-4 mt-8 lg:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to be a leader in our industry, creating a positive
              impact on businesses and communities worldwide. We aim to foster
              an environment of innovation and collaboration, where every team
              member contributes to our collective success.
            </p>
          </div>
        </div>

        {/* Company Values Section */}
        <h3 className="text-3xl font-extrabold text-gray-900 mb-8">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Integrity
            </h4>
            <p className="text-gray-600">
              We value honesty and transparency in all our dealings, always
              acting with the highest level of integrity in everything we do.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Innovation
            </h4>
            <p className="text-gray-600">
              Innovation is at the heart of everything we do. We are constantly
              looking for new and better ways to solve problems and drive
              change.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Collaboration
            </h4>
            <p className="text-gray-600">
              We believe in the power of collaboration, fostering an environment
              where ideas are shared and everyone’s voice is heard.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                John Doe
              </h4>
              <p className="text-gray-600 mb-2">CEO</p>
              <p className="text-gray-600">
                John is a visionary leader with a passion for technology and
                entrepreneurship. He has over 20 years of experience in the tech
                industry.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Jane Smith
              </h4>
              <p className="text-gray-600 mb-2">CTO</p>
              <p className="text-gray-600">
                Jane is the technical mastermind behind our solutions. She leads
                the engineering team and ensures we stay on the cutting edge of
                technology.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Sarah Lee
              </h4>
              <p className="text-gray-600 mb-2">Marketing Director</p>
              <p className="text-gray-600">
                Sarah is an expert in digital marketing and leads our marketing
                team to help our clients reach their target audience
                effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="mt-16 bg-blue-600 text-white py-12 rounded-md">
          <div className="max-w-screen-xl mx-auto text-center px-6">
            <h3 className="text-3xl font-extrabold mb-4">Let's Connect</h3>
            <p className="text-xl mb-6">
              Have a project in mind? Get in touch with us, and let’s make
              something amazing together.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
