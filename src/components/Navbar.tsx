import React from "react";

const Navbar = () => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-4">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
