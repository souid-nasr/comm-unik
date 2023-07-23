"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("rgba(0, 0, 0, 0.1)");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("rgba(0, 0, 0, 0.7)");
        setTextColor("#000000");
      } else {
        setColor("rgba(0, 0, 0, 0.1)");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 text-white"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-yellow-500">
        <Link href="/" className="logo d-flex align-items-center">
          <Image quality={100} src={logo} width="200" height="1" alt="/" />
        </Link>
        <nav id="navbar" className="navbar px-9">
          <ul>
            <li>
              <Link href="/" className="nav-link">
                ACCUEIL
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                NOTRE SOCIETE
              </Link>
            </li>
            <li>
              <Link href="/agencements" className="nav-link">
                AMENAGEMENTS
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="nav-link">
                {" "}
                REALISATIONS
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="nav-link">
                PRICING
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
            <li>
              <Link className="nav-link get-a-quote" href="/appointment">
                OBTENIR UN DEVIS
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
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
                {/* <Link href="/">
                  <Image quality={100} src={logo} width="87" height="35" alt="/" />
                </Link> */}
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
              <ul className="uppercase text-white">
                <Link className="nav-link" href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2 nav-link text-sm text-white"
                  >
                    ACCUEIL
                  </li>
                </Link>
                <Link className="nav-link" href="/about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2 nav-link text-white text-sm"
                  >
                    NOTRE SOCIETE
                  </li>
                </Link>
                <Link className="nav-link" href="/agencements">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2 nav-link text-white text-sm"
                  >
                    AMENAGEMENTS
                  </li>
                </Link>
                <Link className="nav-link"href="/agencements">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2 nav-link text-white text-sm"
                  >
                  REALISATIONS
                  </li>
                </Link>
                <Link className="nav-link" href="/pricing">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2 nav-link  text-white text-sm"
                  >
                    PRICING
                  </li>
                </Link>
                <Link className="nav-link" href="/contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-2  text-white text-sm"
                  >
                    CONTACT
                  </li>
                </Link>
                <li>
                  <Link
                    className="py-2 nav-link text-white text-sm"
                    href="/appointment"
                  >
                    OBTENIR UN DEVIS
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
