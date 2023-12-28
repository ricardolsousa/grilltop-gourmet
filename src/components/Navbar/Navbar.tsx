import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useRef, useState } from "react";
import Cart from "../Cart/Cart";

interface NavbarProps {
    cart: [];
}

const Navbar = (props: NavbarProps) => {

    const {
        cart
    } = props;

    const [showModal, setShowModal] = useState<boolean>(false);

    const openCartModal = () => {
        setShowModal(true);
    }

    return (
        <div className="full-navbar">
            <div className="navbar">
                <div className="navbar-logo" >
                    <Link to="/">
                        <img src="/images/grilltop-gourmet.svg" alt="" className="navbar-logo-svg" />
                    </Link>
                </div>
                <div className="navbar-cart" onClick={openCartModal}>
                    <img src="/images/cart.svg" alt="" className="navbar-cart-svg" />
                    <div className="navbar-cart-counter">
                        <span className="navbar-cart-number">{cart.length}</span>
                    </div>
                </div>
                {showModal && (
                    <Cart setShowModal={setShowModal}/>
                )}
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