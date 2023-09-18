import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  {
    id: 0,
    href: '/',
    label: 'Home'
  },
  {
    id: 1,
    href: '/about',
    label: 'About'
  },
  {
    id: 2,
    href: '/services',
    label: 'Services'
  },
  {
    id: 3,
    href: '/products',
    label: 'Products'
  },
  {
    id: 4,
    href: '/contact',
    label: 'Contact'
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-8 bg-gray-900 text-white z-10">
      {/* Logo */}
      <div className="ml-10">
        <Link href="/">
          <p className="text-2xl md:text-4xl font-bold">RoleTech & Consulting</p>
        </Link>
      </div>

      {/* Menu Icon */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Links */}
      <ul className={`hidden md:flex space-x-10 mr-10 ${isMenuOpen ? '' : 'hidden'}`}>
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.href}>
              <p className="hover:text-gray-300 text-xl">{nav.label}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 right-0 bg-gray-900 w-64 p-4 ${isMenuOpen ? '' : 'hidden'}`}>
        <ul className="space-y-4">
          {navLinks.map((nav) => (
            <li key={nav.id} onClick={toggleMenu}>
              <Link href={nav.href}>
                <p className="text-white block hover:text-gray-300">{nav.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;