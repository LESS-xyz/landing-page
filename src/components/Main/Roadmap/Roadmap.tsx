import React from "react";
import './Roadmap.scss';
import {RoadmapCard} from "./RoadmapCard/RoadmapCard";
import LeftCube from '../../../assets/img/roadmap-left-cube-bg.svg';
import RightCube from '../../../assets/img/roadmap-right-cube-bg.svg';

export const Roadmap: React.FC = () => {
    return (
        <div className='roadmap' id='roadmap'>
            <div className='container'>
                <h1 className='roadmap__header h1 text-bold text-center'>
                    Roadmap
                </h1>
                <div className="roadmap__cards">
                    <RoadmapCard stage='Q2'
                                 goals={['Less Presale', 'LessPad ETH/BSC Chain', 'LessTools Beta', 'CEX Listing']}/>
                    <RoadmapCard stage='Q3'
                                 goals={['LessTools platform release','LessNFT ETH/BSC chain release','New Chains Integrated','Project X: More to come!']}/>
                    <RoadmapCard stage='Q4' goals={['LessDex Full Launch','Research & Integrate New Chains','Crosschain features live with added integrations into LessDex','Project X Full Launch (more info coming)']}/>
                </div>
                <img src={LeftCube} alt='background ' className="roadmap__bg-img roadmap__bg-img-left"/>
                <img src={RightCube} alt='background' className="roadmap__bg-img roadmap__bg-img-right"/>
            </div>
        </div>
    )
}