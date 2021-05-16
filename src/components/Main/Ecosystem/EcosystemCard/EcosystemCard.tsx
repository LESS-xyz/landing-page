import React from "react";
import './EcosystemCard.scss';

interface EcosystemCardProps{
    name:string;
    content:string;
    position:"top"|'left'|'bottom'|'right';
}

export const EcosystemCard: React.FC<EcosystemCardProps> = ({name,content,position}) => {
    return (
        <div className={`ecosystem-card ecosystem-card-${position}`}>
            <h3 className='ecosystem-card__title text-orange text-bold'>Less<span className='text-blue'>{name}</span></h3>
            <p className='ecosystem-card__content'>{content}</p>
        </div>
    )
}