// components/Footer.jsx
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold mb-2">Contact Me</h4>
            <p className="mb-2">
              <strong>Email:</strong> kalashpoddar33@gmail.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (+91) 967-4385-032
            </p>
            <p>
              <strong>Location:</strong> Kolkata, India
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            {/* <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a> */}
            <a
              href="https://github.com/kalash33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/kalash33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Kalash Poddar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
