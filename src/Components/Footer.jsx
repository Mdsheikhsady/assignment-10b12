import React from "react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside className="w-50">
          <p>
            <Link to={"/"} className="btn btn-ghost text-xl">
              <img className="w-35 h-12 mb-10" src="./logo.png" alt="" />
            </Link>
            <br />
            Pet Mart World connects local pet owners and buyers for adoption and
            pet care products.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to={"/services"} className="link link-hover">
            Services
          </Link>
          <Link to={"/profile"} className="link link-hover">
            My Profile
          </Link>
          <Link to={"/add-services"} className="link link-hover">
            Add Services
          </Link>
          <Link to={"/my-services"} className="link link-hover">
            My Services
          </Link>
        </nav>
        <nav>
          <Link to={"/"} className="link link-hover">
            Home
          </Link>
          <Link to={"/my-services"} className="link link-hover">
            Services
          </Link>
          <Link to={"/profile"} className="link link-hover">
            My Profile
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to={"/termsofuse"} className="link link-hover">
            Terms of use
          </Link>
          <Link to={"/privacypolicy"} className="link link-hover">
            Privacy policy
          </Link>
        </nav>
        <nav>
          <div className="flex gap-4 mt-6 text-2xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary cursor-pointer transition-colors"
            >
              <FaFacebook />
            </a>
            
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary cursor-pointer transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary cursor-pointer transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Sady
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
