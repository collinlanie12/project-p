import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility
  const navRef = useRef<HTMLDivElement>(null); // Ref for the navbar

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="fixed w-full bg-transparent text-white">
      <div className="flex flex-row items-center justify-between p-4 py-4 mt-4">
        {/* Logo */}
        <a href="#home" className="">
          <img
            src="src/assets/cl-dev-high-resolution-logo-transparent.svg"
            alt="My Portfolio Logo"
            className="h-14 w-auto"
          />
        </a>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none relative w-6 h-6"
        >
          {/* Top Line */}
          <span
            className={`hamburger-line ${isOpen ? "rotate-45 " : "top-0"}`}
          ></span>

          {/* Middle Line */}
          <span
            className={`hamburger-line ${isOpen ? "opacity-0" : "top-2.5"}`}
          ></span>

          {/* Bottom Line */}
          <span
            className={`hamburger-line ${isOpen ? "-rotate-45" : "bottom-0.5"}`}
          ></span>
        </button>

        {/* Menu Items */}
        <ul
          className={`fixed top-20 right-0 w-full bg-black md:bg-transparent md:static md:flex md:items-center md:space-x-3 md:w-auto md:opacity-100 transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="text-center md:text-left px-4 bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 reounded md:bg-transparent md:hover:bg-transparent"
            >
              <a
                href={item.href}
                className="block py-2 md:inline hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
