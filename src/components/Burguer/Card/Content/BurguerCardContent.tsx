import React from 'react';
import "../Content/BurguerCardContent.css";
import { Burguer } from '../../../../interfaces/Burguer/interfaces';

interface BurguerCardContentProps {
    burguer: Partial<Burguer>;
}

const BurguerCardContent = (props: BurguerCardContentProps) => {
    
    const { burguer } = props;

    return (
        <div className="card-text">
            <h4 className="card-title">{burguer.name}</h4>
            <span className="card-description">{burguer.description}</span>
        </div>        
    )
}

export default BurguerCardContent;