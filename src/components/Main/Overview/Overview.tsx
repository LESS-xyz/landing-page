import React from "react";
import './Overview.scss';
import BackgroundImg from '../../../assets/img/overview-background.png';

export const Overview: React.FC = () => {
    return (
        <div className='overview'>
            <div className='overview-container'
                 style={{backgroundImage: `url(${BackgroundImg})`}}>
                <div className='container'>
                    <h1 className='overview__header h1-xl text-bold'>Next Generation
                        Cross-Chain <span>
                        DeFi Products
                        </span>
                    </h1>
                    <p className="overview__description text-gray-d">Observe data. Identify alternatives.{' '}
                        <span> Make the best trade</span>
                    </p>
                </div>
            </div>
        </div>
    )
}