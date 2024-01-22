import { bindActionCreators } from "redux";
import { removeAllFromCart } from "../../../../actions/Cart/cartActions";
import { connect } from "react-redux";
import { CartItem } from "../../../../interfaces/Cart/interfaces";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../../components/Details/PaymentDetails.css';

interface PaymentDetailsProps {
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

const PaymentDetails = (props: PaymentDetailsProps) => {
    const { removeAllFromCart } = props
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
        <div className="payment-person-details-container">
            <div className="payment-person-details-title">Details</div>
            <div className="payment-person-details">
                <div className="payment-person-input">
                    <input type="email" name="email" id="email" placeholder="Email address*" onChange={(e: any) => handleOrderDetails(e.target.value, "email")} />
                </div>
                <div className="payment-person-input">
                    <input type="text" name="name" id="name" placeholder="Fullname*" onChange={(e: any) => handleOrderDetails(e.target.value, "fullname")} />
                </div>
                <div className="payment-person-input">
                    <input type="text" name="street" id="street" placeholder="Street*" onChange={(e: any) => handleOrderDetails(e.target.value, "street")} />
                </div>
                <div className="payment-person-input">
                    <input type="text" name="city" id="city" placeholder="City*" onChange={(e: any) => handleOrderDetails(e.target.value, "city")} />
                </div>
                <div className="payment-person-input">
                    <input type="text" name="postalCode" id="postalCode" placeholder="Postal Code*" onChange={(e: any) => handleOrderDetails(e.target.value, "postalCode")} />
                </div>
            </div>
            <div className="payment-finish-order">
                <button className="btn-finish-order" onClick={() => finishOrder()} >Finish order</button>
            </div>
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


export default connect(mapStateForProps, mapDispatchToProps)(PaymentDetails);