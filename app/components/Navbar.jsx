"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/img/logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [colorbg, setColorbg] = useState("var(--color-secondary) linear-gradient(rgba(var(--color-primary-rgb), 0.95), rgba(var(--color-primary-rgb), 0.6))");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColorbg("var(--color-secondary) linear-gradient(rgba(var(--color-primary-rgb), 0.95), rgba(var(--color-primary-rgb), 0.6))");
        setTextColor("#000000");
      } else {
        setColorbg("var(--color-secondary) linear-gradient(rgba(var(--color-primary-rgb), 0.95), rgba(var(--color-primary-rgb), 0.6))");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: colorbg }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 header"

      
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center ">
        <Link href="/" className="logo d-flex align-items-center">
          <Image src={logo} width="50" height="35" alt="/" />
        </Link>
        <nav id="navbar" className="navbar px-9">
          <ul>
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link className="get-a-quote" href="/appointment">
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10" style={{color:"white"}}>
          <AiOutlineMenu size={20} />
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black/25 p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image src={logo} width="38" height="35" alt="/" />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-yellow-500 text-yellow-500 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b-[2px] border-yellow-500 my-4">
                <p className="w-[85%] md:w-[90%] py-4 text-yellow-500">
                  Let&#39;s build something legendary together
                </p>
              </div>
            </div>
            <div className="py-3 flex flex-col">
              <ul className="uppercase text-yellow-400">
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2  text-sm text-yellow-400"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2 text-yellow-400 text-sm"
                  >
                    About
                  </li>
                </Link>
                <Link href="/services">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2 text-yellow-400 text-sm"
                  >
                    Services
                  </li>
                </Link>
                <Link href="/pricing">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2 text-yellow-400 text-sm"
                  >
                    Pricing
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2 text-yellow-400 text-sm"
                  >
                    Contact
                  </li>
                </Link>
                <li>
                  <Link
                    className="py-2 text-yellow-400 text-sm"
                    href="/appointment"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
              <div className="pt-35">
                <p className="uppercase tracking-widest text-yellow-500">
                  Let&#39;s Connect
                </p>
                <div className="flex items-center text-yellow-500 justify-between my-2 w-full sm:w-[80%]">
                  <a
                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg text-yellow-500 shadow-yellow-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/fireclint"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 text-yellow-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href="/contact">
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg text-yellow-500 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="/services">
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg text-yellow-500 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
