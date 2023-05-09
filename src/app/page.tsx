import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <body className="bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">MobCode Arena</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-gray-900">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Empower mob programming</h1>
        <p className="text-xl text-gray-700 mb-12">
          Unite, Collaborate, and Innovate with MobCode Arena
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-800"
        >
          Get Started
        </a>
      </section>

      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <i className="fas fa-users text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Real-time Collaboration</h3>
            <p className="text-gray-700">
              Connect with your team and work on code simultaneously, increasing
              productivity and efficiency.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <i className="fas fa-rocket text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Fast & Responsive</h3>
            <p className="text-gray-700">
              MobCode Arena is built with performance in mind, ensuring a smooth
              and fast experience for all users.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <i className="fas fa-shield-alt text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Secure Environment</h3>
            <p className="text-gray-700">
              Keep your code safe with our robust security features and
              encrypted connections.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <i className="fas fa-code text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Cross-platform Support</h3>
            <p className="text-gray-700">
              Easily access and collaborate on projects across various platforms
              and devices.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <i className="fas fa-cogs text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Customizable Interface</h3>
            <p className="text-gray-700">
              Tailor the interface to your preferences, improving usability and
              workflow.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <i className="fas fa-headset text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
            <p className="text-gray-700">
              Our support team is ready to assist you, ensuring a seamless user
              experience.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 flex flex-col">
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
              <p className="text-4xl font-bold text-white mb-6">$0</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="text-gray-700 mb-6 flex-grow space-y-2">
                <li>Up to 3 team members</li>
                <li>Basic collaboration features</li>
                <li>Real-time code editing</li>
                <li>Version control integration</li>
                <li>Community support</li>
                <li>Standard security measures</li>
              </ul>
              <a
                href="#"
                className="justify-self-end bg-blue-600 text-white py-3 px-6 rounded-md w-full text-center hover:bg-blue-800"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 flex flex-col">
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
              <p className="text-4xl font-bold text-white mb-6">$29</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="text-gray-700 mb-6 flex-grow space-y-2">
                <li>Up to 25 team members</li>
                <li>All collaboration features</li>
                <li>Advanced version control</li>
                <li>Priority email support</li>
                <li>Custom integrations</li>
                <li>Real-time chat & video</li>
                <li>Enhanced security</li>
              </ul>
              <a
                href="#"
                className="bg-blue-600 text-white py-3 px-6 rounded-md w-full text-center hover:bg-blue-800"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 flex flex-col">
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-white mb-6">Custom</p>
            </div>
            <div className="p-6 flex flex-col flex-grow h-full">
              <ul className="text-gray-700 mb-6 flex-grow space-y-2">
                <li>Unlimited team members</li>
                <li>Advanced collaboration features</li>
                <li>Code review & approval</li>
                <li>Premium support</li>
                <li>Custom onboarding</li>
                <li>Single sign-on (SSO)</li>
                <li>Audit logging & compliance</li>
              </ul>
              <a
                href="#"
                className="bg-blue-600 text-white py-3 px-6 rounded-md w-full text-center hover:bg-blue-800"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-center">
            <Image
              src="/logo.png"
              width={250}
              height={250}
              alt="Company Logo"
              className="mx-auto mb-8 rounded-full shadow-md"
            />
            <h3 className="text-3xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-8">
              We are a team of passionate developers and designers who are
              dedicated to building a better future with innovative technology.
            </p>
            <a
              href="#"
              className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-800"
            >
              Learn More
            </a>
          </div>
          <div>
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                We believe in using technology to empower people and
                communities, and our mission is to create software that helps
                teams collaborate and innovate faster than ever before.
              </p>
              <ul className="text-white text-lg">
                <li className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-900 h-8 w-8 flex justify-center items-center mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <span className="font-bold">Put people first</span>
                </li>
                <li className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-900 h-8 w-8 flex justify-center items-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <span className="font-bold">Innovate relentlessly</span>
                </li>
                <li className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-900 h-8 w-8 flex justify-center items-center mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <span className="font-bold">Collaborate effectively</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023  MobCode Arena. All rights reserved.</p>
        </div>
      </footer>
    </body>
  );
}
