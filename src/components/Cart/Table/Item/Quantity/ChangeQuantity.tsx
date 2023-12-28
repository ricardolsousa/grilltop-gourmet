import { bindActionCreators } from 'redux';
import '../Quantity/ChangeQuantity.css';
import { addToCart, removeFromCart } from '../../../../../actions/Cart/cartActions';
import { CartItem } from '../../../../../interfaces/Cart/interfaces';
import { Burguer } from '../../../../../interfaces/Burguer/interfaces';
import { connect } from 'react-redux';

interface ChangeQuantityProps {
    item: CartItem;
    addToCart: (item: Burguer) => void;
    removeFromCart: (item: Burguer) => void;
}

const ChangeQuantity = (props: ChangeQuantityProps) => {

    const { item, addToCart, removeFromCart } = props;

    const handleAddToCart = (item: Burguer) => {
        addToCart(item);
    };

    const handleRemoveFromCart = (item: Burguer) => {
        removeFromCart(item);
    };

    return (
        <div className="item-quantity">
            <div className="item-quantity-buttons" onClick={() => handleRemoveFromCart(item)}>
                <div>-</div>
            </div>
            <div>{item.quantity}</div>
            <div className="item-quantity-buttons" onClick={() => handleAddToCart(item)}>
                <div>+</div>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ addToCart, removeFromCart }, dispatch)
  }

export default connect(null, mapDispatchToProps )(ChangeQuantity);