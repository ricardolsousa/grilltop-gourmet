import { connect } from 'react-redux';
import { CartItem } from '../../../interfaces/Cart/interfaces';
import '../Checkout/CartCheckout.css';
import { useMemo } from 'react';

interface CartCheckoutProps {
    cart: CartItem[];
}

const CartCheckout = (props: CartCheckoutProps) => {

    const { cart } = props;

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2);
    }, [cart]);

    return (
        <div>
            <div className="cart-price">
                <span>Total: {totalPrice}€</span>
            </div>
            <div>
                <button className="btn-checkout">Checkout</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        cart: state.cart.cart,
    };
};

export default connect(mapStateToProps)(CartCheckout);