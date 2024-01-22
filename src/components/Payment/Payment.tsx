import { connect } from 'react-redux';
import '../Payment/Payment.css';
import { CartItem } from '../../interfaces/Cart/interfaces';
import { bindActionCreators } from 'redux';
import PaymentCartDetails from './components/CartDetails/PaymentCartDetails';
import PaymentDetails from './components/Details/PaymentDetails';

interface PaymentProps {
}

const Payment = (props: PaymentProps) => {    

    return (
        <div className="full-container-payment">
            <div className="container-payment">
                <div className="payment">
                    <PaymentDetails />
                    <PaymentCartDetails />
                </div>
            </div>
        </div>
    )
}

const mapStateForProps = (state: any) => {
    return {}
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch)
  }

export default connect(mapStateForProps, mapDispatchToProps)(Payment);