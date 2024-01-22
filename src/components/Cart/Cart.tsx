
import { useEffect, useRef } from "react";
import "../Cart/Cart.css";
import { connect } from "react-redux";
import CartTable from "./Table/CartTable";
import CartEmpty from "./Empty/CartEmpty";
import CartCheckout from "./Checkout/CartCheckout";

interface CartProps {
    cart: {
        name: string;
        description: string;
        price: number;
        quantity: number;
    }[];
    setShowModal: (show: boolean) => void;
}

const Cart = (props: CartProps) => {

    const { cart, setShowModal } = props;
    const cartModalRef = useRef<HTMLDivElement>(null);

    const closeModal = (event: MouseEvent) => {
        if (cartModalRef.current && (!cartModalRef.current.contains(event.target as Node))) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);

        return () => {
            document.removeEventListener('mousedown', closeModal);
        };
    }, []);

    return (
        <div className="cart-modal">
            <div className="cart-modal-container" ref={cartModalRef}>
                <div className="cart-modal-close" onClick={() => setShowModal(false)}>
                    <span>X</span>
                </div>
                <div className="cart-modal-title">
                    Cart
                </div>
                {cart.length ?
                    <div className="cart-modal-content">
                        <CartTable />
                        <CartCheckout setShowModal={setShowModal} withCheckout={true}/>
                    </div>
                    :
                    <CartEmpty />
                }
            </div>
        </div>
    )

}

const mapStateToProps = (state: any) => {
    return {
        cart: state.cart.cart,
    };
};

export default connect(mapStateToProps)(Cart);