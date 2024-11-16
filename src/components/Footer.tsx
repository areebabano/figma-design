import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-customBlue text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-8">
        {/* Logo and Description */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="whitepace logo" className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">whitepace</span>
          </div>
          <p className="text-sm">
            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-bold mb-2">Product</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Overview</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customer stories</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-bold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides & tutorials</a></li>
            <li><a href="#">Help center</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Media kit</a></li>
          </ul>
        </div>

        {/* Try It Today Section */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="font-bold mb-2">Try It Today</h3>
          <p className="text-sm mb-4">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="flex items-center justify-center w-full px-4 py-2 bg-customLightBlue rounded-lg text-white font-semibold hover:bg-customDarkBlue">
            Start today <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-800 mt-10 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-6 ml-44">
          <div>🌐 English</div>
          <div>Terms & Privacy</div>
          <div>Security</div>
          <div>Status</div>
          <div>©2021 Whitepace LLC.</div>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 mr-40">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
