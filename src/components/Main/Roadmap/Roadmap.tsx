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
                                 goals={['Less Presale', 'LessPad ETH/BSC Chain', 'LessTools Beta', 'CEX Listing', 'DAO Launch', 'UX/UI Redesign']}/>
                    <RoadmapCard stage='Q3'
                                 goals={['NFT marketing promotion tool', 'Presale promotion tools', 'More tools (mempool, analytics...)', 'Improvements based on community feedback']}/>
                    <RoadmapCard stage='Q4' goals={['CEX tools', 'Advanced public API release', 'More dex integration']}/>
                </div>
                <img src={LeftCube} alt='background ' className="roadmap__bg-img roadmap__bg-img-left"/>
                <img src={RightCube} alt='background' className="roadmap__bg-img roadmap__bg-img-right"/>
            </div>
        </div>
    )
}