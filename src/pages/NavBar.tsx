import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between border-b p-6">
        <ul className="flex gap-10 items-center font-serif">
          <li className="transition-ease-in-out delay-150 hover:bg-gray-200 hover:scale-110 hover:translate-y-1 duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="transition-ease-in-out delay-150 hover:bg-gray-200 hover:scale-110 hover:translate-y-1 duration-300">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="transition-ease-in-out delay-150 hover:bg-gray-200 hover:scale-110 hover:translate-y-1 duration-300">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="transition-ease-in-out delay-150 hover:bg-gray-200 hover:scale-110 hover:translate-y-1 duration-300">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="transition-ease-in-out delay-150 hover:bg-gray-200 hover:scale-110 hover:translate-y-1 duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="">
          <h2 className="text-4xl font-sans font-bold mr-20">Brisa</h2>
        </div>
        <ul className="flex gap-10 items-center font-serif">
          <li className="transition-ease-in-out delay-150 hover:bg-gray-200 hover:scale-110 hover:translate-y-1 duration-300">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="transition-ease-in-out delay-150 hover:bg-gray-200 hover:scale-110 hover:translate-y-1 duration-300">
            <Link to="/account">Account</Link>
          </li>
          <li className="flex items-center">
            <SearchOutlined className="text-xl" />
          </li>
          <li className="flex items-center">
            <ShoppingCartOutlined className="text-2xl" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
