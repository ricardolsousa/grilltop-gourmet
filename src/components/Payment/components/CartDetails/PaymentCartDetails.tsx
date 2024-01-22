import { bindActionCreators } from "redux";
import { removeAllFromCart } from "../../../../actions/Cart/cartActions";
import { connect } from "react-redux";
import CartCheckout from "../../../Cart/Checkout/CartCheckout";
import ChangeQuantity from "../../../Cart/Table/Item/Quantity/ChangeQuantity";
import { CartItem } from "../../../../interfaces/Cart/interfaces";
import '../../components/CartDetails/PaymentCartDetails.css';
import CartEmpty from "../../../Cart/Empty/CartEmpty";

interface PaymentCartDetailsProps {
    cart: CartItem[];
}

const PaymentCartDetails = (props: PaymentCartDetailsProps) => {
    
    const { cart } = props;

    return (
        <div className="payment-cart-details-container">
            <div className="payment-cart-details-title">Cart:</div>
            <div className="payment-cart-all-details">
                {cart.length ? cart.map((item) =>
                    <div className="payment-cart-details">
                        <div className="payment-cart-details-image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="payment-cart-details-name">
                            {item.name}
                        </div>
                        <div className="payment-cart-details-price">
                            {item.price}€
                        </div>
                        <div className="payment-cart-details-quantity">
                            <ChangeQuantity item={item} />
                        </div>
                    </div>
                ) : <CartEmpty />}
            </div>

            {cart.length ? 
                <div className="payment-cart-details-total-price">
                    <CartCheckout withCheckout={false} />
                </div> 
            : null}
        </div>
    )
};

const mapStateForProps = (state: any) => {
    return {
        cart: state.cart.cart
    }
}
function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ removeAllFromCart }, dispatch)
  }


export default connect(mapStateForProps, mapDispatchToProps)(PaymentCartDetails);