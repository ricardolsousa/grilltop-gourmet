import React from 'react';
import "../Card/BurguerCard.css";
import { Burguer } from '../../../interfaces/Burguer/interfaces';
import BurguerCardContent from '../Card/Content/BurguerCardContent';
import BurguerCardOptions from '../Card/Options/BurguerCardOptions';

interface BurguerCardProps {
    burguer: Burguer
    addToCart: (burguer: Burguer) => void;
}

const BurguerCard = (props: BurguerCardProps) => {
    
    const { burguer, addToCart } = props;

    return (
        <div className="card">
            <div className="card-content">
                <img src={burguer.image} alt="" className="card-image" />
                    <BurguerCardContent burguer={burguer}/>
                    <BurguerCardOptions burguer={burguer} addToCart={addToCart}/>
            </div>
        </div>
    )
}

export default BurguerCard;