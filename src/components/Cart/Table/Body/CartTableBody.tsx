import { connect } from 'react-redux';
import '../Body/CartTableBody.css';
import ChangeQuantity from '../Item/Quantity/ChangeQuantity';
import { CartItem } from '../../../../interfaces/Cart/interfaces';

interface CartTableBodyProps {
    cart: CartItem[];
}

const CartTableBody = (props: CartTableBodyProps) => {
    
    const { cart } = props;
    
    return (
        <tbody>
            {cart.map((item) => 
                <tr>
                    <td style={{ width: '20%' }}>{item.name}</td>
                    <td style={{ width: '60%' }}>{item.description}</td>
                    <td style={{ width: '10%' }}>{item.price}€</td>
                    <td style={{ width: '10%' }}>
                        <ChangeQuantity item={item} />
                    </td>
                </tr>
            )}
        </tbody>
    )
}

const mapStateToProps = (state: any) => {
    return {
        cart: state.cart.cart,
    };
};

export default connect(mapStateToProps)(CartTableBody);