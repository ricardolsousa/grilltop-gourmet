import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

interface NavbarProps {
    cart: [];
}

const Navbar = (props: NavbarProps) => {

    const {
        cart
    } = props;

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
                    <div className="navbar-cart-counter">
                        <span className="navbar-cart-number">{cart.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
      cart: state.cart.cart,
    };
  };

export default connect(mapStateToProps)(Navbar);