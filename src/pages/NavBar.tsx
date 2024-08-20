import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between border-b p-6">
        <ul className="flex gap-10 items-center font-serif">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="">
          <h2 className="w-8/12 text-4xl font-serif font-bold">Cart</h2>
        </div>
        <ul className="flex gap-10 items-center font-serif">
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <SearchOutlined className="text-xl"/>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
