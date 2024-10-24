import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavComponent() {
  const cart = useSelector((state) => state.cart);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            Zeyad Mohsen
          </Link>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">{`Cart - (${cart.length})`}</Link>
        </nav>
      </div>
    </header>
  );
}

export default NavComponent;
