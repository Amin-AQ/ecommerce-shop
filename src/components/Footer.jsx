import React from "react";
import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
      <div className="grid grid-cols-2 gap-10">
        {/* First column: Help & Information */}
        <div className="text-left">
          <h4 className="text-xl font-bold mb-4">Help & Information</h4>
          <ul className="text-lg">
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Shipping and Delivery</a></li>
            <li><a href="#">Exchange and Return Policy</a></li>
            <li><a href="#">Order and Refund Policy</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        
        {/* Second column: For Assistance */}
        <div className="text-left">
          <h4 className="text-xl font-bold mb-4">For Assistance</h4>
          <ul className="text-lg">
            <li>Mon - Sat 10AM to 10PM</li>
            <li>Whatsapp : +923056747192</li>
            <li>For Call: 042-111-115-226 (UAN)</li>
            <li>Email: customercare@gmail.pk</li>
          </ul>
          <hr className="border-t border-gray-300 my-4" />
          <div className="grid grid-cols-4 gap-4">
            <FaSquareXTwitter className="text-4xl max-sm:text-3xl text-accent-content" />
            <FaSquareFacebook className="text-4xl max-sm:text-3xl text-accent-content" />
            <FaSquareInstagram className="text-4xl max-sm:text-3xl text-accent-content" />
            <FaSquareYoutube className="text-4xl max-sm:text-3xl text-accent-content" />
          </div>
        </div>
      </div>
      <p className="text-lg max-sm:text-sm text-accent-content mt-8">
        Copyright © 2023 - All rights reserved by Clothing & Sports Wear Store
      </p>
    </footer>
  );
};

export default Footer;
