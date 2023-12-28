import React from 'react';
import "../Options/BurguerCardOptions.css";
import { Burguer } from '../../../../interfaces/Burguer/interfaces';
import { connect } from 'react-redux';
import { addToCart } from '../../../../actions/Cart/cartActions';
import { bindActionCreators } from 'redux';

interface BurguerCardOptionsProps {
    burguer: Burguer;
    addToCart: (burguer: Burguer) => void;
}

const BurguerCardOptions = (props: BurguerCardOptionsProps) => {
    
    const { burguer, addToCart } = props;

    const handleAddToCart = (item: Burguer) => {
        addToCart(item);
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