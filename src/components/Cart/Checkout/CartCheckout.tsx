import { connect } from 'react-redux';
import { CartItem } from '../../../interfaces/Cart/interfaces';
import '../Checkout/CartCheckout.css';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartCheckoutProps {
    cart: CartItem[];
    setShowModal?: (show: boolean) => void;
    withCheckout: boolean;
}

const CartCheckout = (props: CartCheckoutProps) => {

    const { cart, setShowModal, withCheckout } = props;
    const navigate = useNavigate();

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2);
    }, [cart]);

    const goToPayment = () => {
        if (setShowModal) setShowModal(false);
        navigate('/payment')
    }

    return (
        <div>
            <div className="cart-price">
                <span>Total: {totalPrice}€</span>
            </div>
            {withCheckout &&
                <div>
                    <button className="btn-checkout" onClick={goToPayment}>Checkout</button>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        cart: state.cart.cart,
    };
};

export default connect(mapStateToProps)(CartCheckout);