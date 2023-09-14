import Link from 'next/link';

const navLinks = [
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
]

const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-8 bg-gray-900 text-white">
        {/* Logo */}
        <div>
          <Link href="/">
            <p className="text-4xl font-bold">RoleTech & Consulting</p>
          </Link>
        </div>
  
        {/* Links */}
        <ul className="flex space-x-4 mr-10">
          {navLinks.map((nav) => {
            return (
              <li key={nav.id}>
                <Link href={nav.href}>
                  <p className="hover:text-gray-300 text-xl">{nav.label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;