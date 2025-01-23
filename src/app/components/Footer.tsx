import React from "react";
import { LiaTwitter } from "react-icons/lia";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-10 grid-rows-1">
      <div>
        <p className="text-xl font-bold">SHOP.CO</p>
        <p>
          We have clothes that suits your style and which you are proud to wear.
          From women to men.
        </p>
        <ul className="flex gap-2">
          <Link href="">
            {" "}
            <li>
              <LiaTwitter />
            </li>
          </Link>
          <Link href="">
            {" "}
            <li>
              <BsFacebook />
            </li>
          </Link>
          <Link href="">
            {" "}
            <li>
              <FaInstagram />
            </li>
          </Link>
          <Link href="">
            {" "}
            <li>
              <BsGithub />
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold">COMPANY</h2>
        <p>About</p>
        <p>Features</p>
        <p>Works</p>
        <p>Career</p>
      </div>
      <div>
        <p className="text-xl font-bold ">HELP</p>
        <h2>Customer Suport</h2>
        <h2>Deliver Details</h2>
        <h2>Terms and Conditions</h2>
        <h2>Privacy Policy</h2>
      </div>
      <div>
        <p className="text-xl font-bold">FAQ</p>
        <h2>Account</h2>
        <h2>Manage Deliveris</h2>
        <h2>Orders</h2>
        <h2>Payments</h2>
      </div>
      <div>
        <p className="text-xl font-bold">RESOURCES</p>
        <h2>Free eBooks</h2>
        <h2>Devlopment Tutorial</h2>
        <h2>How to -Blog</h2>
        <h2>Youtube Playlist</h2>
      </div>
    </div>
  );
}

export default Footer;
