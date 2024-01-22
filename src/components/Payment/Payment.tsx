import { connect } from 'react-redux';
import '../Payment/Payment.css';
import { CartItem } from '../../interfaces/Cart/interfaces';
import ChangeQuantity from '../Cart/Table/Item/Quantity/ChangeQuantity';
import CartCheckout from '../Cart/Checkout/CartCheckout';
import { useState } from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { useNavigate } from 'react-router-dom';
import { removeAllFromCart } from '../../actions/Cart/cartActions';
import { bindActionCreators } from 'redux';

interface PaymentProps {
    cart: CartItem[];
    removeAllFromCart: () => void;
}

interface OrderDetailsProps {
    email: string;
    fullname: string;
    street: string;
    city: string;
    postalCode: string;
}

const Payment = (props: PaymentProps) => {

    const { cart, removeAllFromCart } = props;
    const { addToast } = useToasts();
    const navigate = useNavigate();
    
    const [orderDetails, setOrderDetails] = useState<OrderDetailsProps>({
        email: "",
        fullname: "",
        street: "",
        city: "",
        postalCode: "",
    });

    const handleOrderDetails = (data: string, property: string) => {
        const value = data;
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            [property]: value,
        }));
    }

    const validateInputs = (): boolean => {
        for (const key in orderDetails) {
            if (orderDetails[key as keyof OrderDetailsProps].trim() === '') {
                return false;
            }
        }
        return true;
    }

    const finishOrder = () => {
        const allInputsFilled = validateInputs();

        if (allInputsFilled) {
            removeAllFromCart();
            addToast('Order finished with success!', { appearance: 'success', autoDismiss: true });
            navigate('/')
        } else {
            addToast('Please fill all required inputs', { appearance: 'error', autoDismiss: true });
        }
    }

    return (
        <div className="full-container-payment">
            <div className="container-payment">
                <div className="payment">
                    <div className="payment-person-details-container">
                        <div className="payment-person-details-title">Details</div>
                        <div className="payment-person-details">
                            <div className="payment-person-input">
                                <input type="email" name="email" id="email" placeholder="Email address*" onChange={(e: any) => handleOrderDetails(e.target.value, "email")}/>
                            </div>
                            <div className="payment-person-input">
                                <input type="text" name="name" id="name" placeholder="Fullname*" onChange={(e: any) => handleOrderDetails(e.target.value, "fullname")}/>
                            </div>
                            <div className="payment-person-input">
                                <input type="text" name="street" id="street" placeholder="Street*" onChange={(e: any) => handleOrderDetails(e.target.value, "street")}/>
                            </div>
                            <div className="payment-person-input">
                                <input type="text" name="city" id="city" placeholder="City*" onChange={(e: any) => handleOrderDetails(e.target.value, "city")}/>
                            </div>
                            <div className="payment-person-input">
                                <input type="text" name="postalCode" id="postalCode" placeholder="Postal Code*" onChange={(e: any) => handleOrderDetails(e.target.value, "postalCode")}/>
                            </div>
                        </div>
                        <div className="payment-finish-order">
                            <button className="btn-finish-order" onClick={() => finishOrder()} >Finish order</button>
                        </div>
                    </div>

                    <div className="payment-cart-details-container">
                        <div className="payment-cart-details-title">Cart:</div>
                        <div className="payment-cart-all-details">
                            {cart.length && cart.map((item) => 
                                <div className="payment-cart-details">
                                    <div className="payment-cart-details-image">
                                        <img src={item.image} alt=""/>
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
                            )}
                        </div>
                        <div className="payment-cart-details-total-price">
                            <CartCheckout withCheckout={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateForProps = (state: any) => {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ removeAllFromCart }, dispatch)
  }

export default connect(mapStateForProps, mapDispatchToProps)(Payment);