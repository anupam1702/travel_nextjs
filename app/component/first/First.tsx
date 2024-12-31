'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdCardTravel } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const First = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-4">
        <header className="flex items-center">
          <MdCardTravel className="mx-2" />
          TravelWithUs
        </header>
        {/* Toggle Button for Smaller Screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } bg-gray-100 absolute top-16 left-0 w-full md:static md:flex md:justify-end md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:gap-4 p-4 md:p-0">
            <li className="z-10 my-2 md:my-0">
              <Link href="/" className=" text-orange-400">
                Home
              </Link>
            </li>
            <li className="z-10 my-2 md:my-0">
              <Link href="/">Blog</Link>
            </li>
            <li className="z-10 my-2 md:my-0">
              <Link href="/">Video</Link>
            </li>
            <li className="z-10 my-2 md:my-0">
              <Link href="/">About Us</Link>
            </li>
            <li className="z-10 my-2 md:my-0">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full relative">
        {/* Image container */}
        <Image
          src="https://thumbs.dreamstime.com/b/white-cruise-ship-lifeboats-white-background-white-cruise-ship-lifeboats-white-background-perfect-travel-329866227.jpg"
          width={1200}
          height={600}
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[200px] bg-gray-900 text-white p-4 text-center rounded-lg">
            <span className="absolute top-0 left-0 bg-orange-200">✶</span>
            <span className="absolute top-0 right-0 bg-orange-200">✶</span>
            <span className="absolute bottom-0 left-0 bg-orange-200">✶</span>
            <span className="absolute bottom-0 right-0 bg-orange-200">✶</span>
            Embark On <br /> Lizze Roose&apos;s
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
