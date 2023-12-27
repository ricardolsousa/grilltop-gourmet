import React from 'react';
import "../Card/BurguerCard.css";
import { Burguer } from '../../../interfaces/Burguer/interfaces';
import BurguerCardContent from '../Card/Content/BurguerCardContent';
import BurguerCardOptions from '../Card/Options/BurguerCardOptions';

interface BurguerCardProps {
    burguer: Burguer
}

const BurguerCard = (props: BurguerCardProps) => {
    
    const { burguer } = props;

    return (
        <div className="card">
            <div className="card-content">
                <img src={burguer.image} alt="" className="card-image" />
                    <BurguerCardContent burguer={burguer}/>
                    <BurguerCardOptions burguer={burguer}/>
            </div>
        </div>
    )
}

export default BurguerCard;