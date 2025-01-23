"use client";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { SiAppium } from "react-icons/si";
import { NavigationMenuDemo } from "@/components/Nav";
import { SheetSide } from "@/components/sheet";
function Navbar() {
  return (
    <div>
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
        <div className="hidden md:block">
          <div className="  flex justify-center items-center w-[300px] h-[40px] bg-[#f0f0f0] rounded-[62px]">
            <FaSearch className="mr-3 text-xl" />
            <input
              placeholder="Search Item..."
              className="w-full h-full bg-[#f0f0f0]  rounded-[62px] outline-none"
            />
          </div>
        </div>
        <div className="flex  ">
          <Link href="/cart">
            <FaCartShopping className="mr-5 text-2xl" />
          </Link>
          <SiAppium className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
