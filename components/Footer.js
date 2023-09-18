import Link from 'next/link';

const navLinks = [
  {
    id: 1,
    href: '/about',
    label: 'About',
  },
  {
    id: 2,
    href: '/services',
    label: 'Services',
  },
  {
    id: 3,
    href: '/products',
    label: 'Products',
  },
  {
    id: 4,
    href: '/contact',
    label: 'Contact',
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 flex flex-col items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold">RoleTech & Consulting</h2>
          <p className="mt-2 text-lg">Providing innovative tech solutions</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((nav) => {
              return (
                <li key={nav.id}>
                  <Link href={nav.href}>
                    <p className="hover:text-gray-300 text-lg ml-5">{nav.label}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="text-lg">123 Tech Street</p>
          <p className="text-lg">City, State, ZIP</p>
          <p className="text-lg">Email: info@techcompany.com</p>
          <p className="text-lg">Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-2xl">
          &copy; {new Date().getFullYear()} RoleTech & Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;