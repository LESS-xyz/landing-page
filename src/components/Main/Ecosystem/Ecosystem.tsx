import React from "react";
import './Ecosystem.scss';
import {EcosystemCard} from "./EcosystemCard/EcosystemCard";
import Coin from '../../../assets/img/coin.png';
import CubeBg from '../../../assets/img/ecosystem-cube-bg.svg';
import GraphBg from '../../../assets/img/ecosystem-graph-bg.svg';
import RightBottomBg from '../../../assets/img/ecosystem-right-bottom-bg.svg';

export const Ecosystem: React.FC = () => {
    return (
        <div className='ecosystem' id='ecosystem'>
            <div className='container'>
                <h2 className='ecosystem__title h1 text-bold text-center'>LESS Ecosystem</h2>

            <div className='ecosystem__content'>
                    <EcosystemCard
                        content="A decentralized launchpad that will allow easy listing of exceptional project. We support you to raise funds for new projects and enable investors to receive early access to token sales."
                        name="Pad" position='top'/>
                <div className='ecosystem__row'>
                    <EcosystemCard name="Tools"
                                   content='Evaluate real-time data, for successful trading strategies and manage your portfolio. Less Tools helps you predict the market movement, explore various pools, pairs and swaps.'
                                   position="left"/>
                    <EcosystemCard name="Dex"
                                   content="LessDex is a multi-chain decentralized exchange aggregator that can be connected with leading exchanges. We assist you to find the price rates across networks."
                                   position='right'/>
                </div>
                    <EcosystemCard name="NFT"
                                   content="An NFT marketplace and ability to operate NFTs. You can create your own NFTs and buy/sell other NFTs available on the platform. "
                                   position='bottom'/>
                <img className='ecosystem__coin-img' src={Coin} alt="coin"/>
                <img className='ecosystem__bg-img ecosystem__bg-img-cube' src={CubeBg} alt="cube img"/>
                <img className='ecosystem__bg-img ecosystem__bg-img-graph' src={GraphBg} alt="graphic img"/>
                <img className='ecosystem__bg-img ecosystem__bg-img-slide' src={RightBottomBg} alt="slides img"/>
            </div>
            </div>
        </div>
    )
}