"use client";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { SiAppium } from "react-icons/si";
import { NavigationMenuDemo } from "@/components/Nav";
import { SheetSide } from "@/components/sheet";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
function Navbar() {
  const item = useSelector((state: RootState) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
       <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      {/* Top Header */}
      <div className="bg-black w-full h-[38px] text-white flex  justify-center items-center relative">
        <p className=" sm: text-sm mr-2 ">
          Sign Up and get 20% off to your first order.
        </p>
        <button>Sign Up Now</button>
        <FaPlus className="text-white absolute right-10 hidden sm:block" />
      </div>
      {/* Header */}
      <div className="w-full h-[50px]  flex justify-start items-start px-5">
        <SheetSide />
        <div className=" text-xl sm:text-3xl font-bold ">SHOP.CO</div>
        <div className="hidden md:block  ">
          <ul className="text-sm flex gap-3 items-center">
            <Link href={"/"}> </Link>
            <Link href={"/"}>
              <NavigationMenuDemo />
            </Link>
            <Link href={"/on-sale"}>
              {" "}
              <li>On Sale</li>
            </Link>
            <Link href={"/new-arrival"}>
              {" "}
              <li>New Arrival</li>
            </Link>
            <Link href={"/brands"}>
              {" "}
              <li>Brands</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:block ml-72 ">
          
          
        </div>
        <div className="flex">
          
          
          <FiSearch className="text-gray-500 text-lg mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent focus:outline-none text-sm placeholder-gray-500"
          />
          <SiAppium className="text-2xl" />
          <Link href="/cart"><FiShoppingCart className="text-2xl cursor-pointer mr-2" /></Link>
        {item.length}
        <FiUser className="text-2xl cursor-pointer" />
         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
