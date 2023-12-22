import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="full-navbar">
            <div className="navbar">
                <div className="navbar-logo" >
                    <Link to="/">
                        <img src="/images/grilltop-gourmet.svg" alt="" className="navbar-logo-svg" />
                    </Link>
                </div>
                <div className="navbar-cart">
                    <Link to="/payment">
                        <img src="/images/cart.svg" alt="" className="navbar-cart-svg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;