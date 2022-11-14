import { Link } from "react-router-dom";
import Search from "../search";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <img className="h-10" src="https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2422-thumb.png" alt="Crypto" />
        </Link>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
