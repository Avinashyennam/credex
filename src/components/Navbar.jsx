// src/components/Navbar.jsx
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800">SoftSell</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="how-it-works"
              smooth={true}
              duration={500}
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              to="why-us"
              smooth={true}
              duration={500}
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
