import React from "react";
import './RoadmapCard.scss';
import RoadmapCardBg from '../../../../assets/img/roadmap-card-bg.svg';
import ArrowRight from '../../../../assets/img/icons/icon-arrow-right.svg';

interface RoadmapCardProps{
    stage:string;
    goals:Array<string>;
}

export const RoadmapCard: React.FC<RoadmapCardProps> = ({stage,goals}) => {
    return (
        <div className='roadmap-card'>
            <img src={RoadmapCardBg} alt='roadmap-bg' className='roadmap-card__bg'/>
            <div className='roadmap-card__arrow-right'>
                <img src={ArrowRight} alt='arrow-right'/>

            </div>
            <div className="roadmap-card__content">
                <h3 className='roadmap-card__title text-orange text-bold'>{stage} <span className="text-blue">2021</span></h3>
                <ul className="roadmap-card__goals">
                    {goals.map((goal:string,index)=>(<li key={`goal-${index}`} className="roadmap-card__goal">{goal}</li>))}
                </ul>
            </div>
        </div>
    )
}