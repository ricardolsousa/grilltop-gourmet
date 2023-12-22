import React from 'react';
import "../Options/BurguerCardOptions.css";
import { Burguer } from '../../../../interfaces/Burguer/interfaces';

interface BurguerCardOptionsProps {
    burguer: Burguer;
    addToCart: (burguer: Burguer) => void;
}

const BurguerCardOptions = (props: BurguerCardOptionsProps) => {
    
    const { burguer, addToCart } = props;

    return (
        <div className="card-options">
            <button className="card-button" onClick={() => addToCart(burguer)}>Adicionar ao carrinho</button>
            <span className="card-price">{burguer.price}€</span>
        </div>        
    )
}

export default BurguerCardOptions;