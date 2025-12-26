"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Btn from "../ui/Btn";

export default function NavBarre() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const menuNav = [
    { label: "Accueil", path: "/" },
    { label: "Projets", path: "/projects" },
    { label: "Expositions", path: "/expo" },
    { label: "Communauté", path: "/community" },
    { label: "À propos", path: "/about" },
  ];

  const handleClick = (label: string) => {
    setActive(label);
    setOpen(false);
  };

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 md:px-32 md:py-6 p-4  flex items-center justify-between transition-all duration-300
        ${scrolled ? "bg-deg backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="flex items-center ">
        <Image src="/logo_icon/iconM.png" alt="logo" width={40} height={20} />
        <h1 className="md:text-2xl font-extrabold">Boka Expo</h1>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block ">
        <ul className="flex gap-6 text-lg font-medium">
          {menuNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                onClick={() => handleClick(item.label)}
                className={`transition-colors duration-300
                  ${
                    active === item.label
                      ? "text-primary border-b-2 border-primary"
                      : "text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:flex hidden gap-4">
            <Btn href ="/auth/regitre" title="Get started"  className=" px-4 py-2 font-bold bg-transparent border-2 border-primary"/>
           <Btn href ="/auth/login" title="Se connecter"  className="flex items-center px-4 py-2  font-bold"  />
        </div>
      {/* Mobile Button */}
      <button
        className="md:hidden  bg-linear-to-bl from-[#1f1b1e5d] via-[#2a1d183c] to-[#f04d071c] backdrop-blur-2xl border border-br p-2 rounded-md"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-19 right-0 w-full  bg-linear-to-bl from-[#1f1b1e5d] via-[#2a1d183c] to-[#f04d071c]  backdrop-blur-2xl  shadow-lg z-40 p-6
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
       

        <ul className="flex flex-col items-center gap-6 text-lg font-medium">
          {menuNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                onClick={() => handleClick(item.label)}
                className={`transition-colors duration-300
                  ${
                    active === item.label
                      ? "text-primary"
                      : "text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
            <div className="flex flex-col gap-4 my-4">
            <Btn href ="/auth/regitre" title="Get started"  className=" flex items-center justify-center px-4 py-2 font-bold bg-transparent border-2 border-primary"/>
           <Btn href ="/auth/login" title="Se connecter"  className="flex items-center justify-center px-4 py-2  font-bold"  />
        </div>
           
      </div>
    </header>
  );
}
