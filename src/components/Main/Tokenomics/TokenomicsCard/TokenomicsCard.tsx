import React from "react";
import './TokenomicsCard.scss';

interface TokenomicsCardProps {
    picture: string;
    title: string;
    amount: string;
    sub: string;
    className?:string;
}

export const TokenomicsCard: React.FC<TokenomicsCardProps> = ({picture, title, amount,sub,className}) => {
    return (
        <div className="tokenomics-card">
            <img src={picture} className={`${className} tokenomics-card__img`} alt='icon'/>
            <div className='tokenomics-card__content'>
                <h4 className='tokenomics-card__title text-blue text-bold'>{title}</h4>
                <p className='tokenomics-card__amount text-regular'>{amount}</p>
                <p className='tokenomics-card__less text-orange text-bold'>{sub}</p>
            </div>
        </div>
    )
}