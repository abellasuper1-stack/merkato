import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Merkato Store</h1>

        <ul className="flex gap-8 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-orange-400 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/shops"
              className="hover:text-orange-400 transition duration-300"
            >
              Shops
            </Link>
          </li>

          <li>
            <Link
              to="/trending"
              className="hover:text-orange-400 transition duration-300"
            >
              Trending
            </Link>
          </li>

          <li>
            <Link
              to="/new-arrivals"
              className="hover:text-orange-400 transition duration-300"
            >
              New Arrivals
            </Link>
          </li>

          <li>
            <Link
              to="/discounts"
              className="hover:text-orange-400 transition duration-300"
            >
              Discounts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;