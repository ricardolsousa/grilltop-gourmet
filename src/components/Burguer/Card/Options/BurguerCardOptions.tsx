import React from 'react';
import "../Options/BurguerCardOptions.css";
import { Burguer } from '../../../../interfaces/Burguer/interfaces';
import { connect } from 'react-redux';
import { addToCart } from '../../../../actions/Cart/cartActions';
import { bindActionCreators } from 'redux';
import { useToasts } from 'react-toast-notifications';

interface BurguerCardOptionsProps {
    burguer: Burguer;
    addToCart: (burguer: Burguer) => void;
}

const BurguerCardOptions = (props: BurguerCardOptionsProps) => {
    
    const { burguer, addToCart } = props;
    const { addToast } = useToasts();

    const handleAddToCart = (item: Burguer) => {
        addToCart(item);
        addToast('Item added to cart!', { appearance: 'success', autoDismiss: true });
      };

    return (
        <div className="card-options">
            <button className="card-button" onClick={() => handleAddToCart(burguer)}>Adicionar ao carrinho</button>
            <span className="card-price">{burguer.price}€</span>
        </div>        
    )
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ addToCart }, dispatch)
  }

export default connect(null, mapDispatchToProps )(BurguerCardOptions);