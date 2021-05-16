import React from "react";
import './Tokenomics.scss';
import {TokenomicsCard} from "./TokenomicsCard/TokenomicsCard";
import TotalSuply from '../../../assets/img/icons/icon-total-suply.svg';
import PublicSale from '../../../assets/img/icons/icon-public-sale.svg';
import LiquidityLocked from '../../../assets/img/icons/icon-liquidity-locked.svg';
import TeamTokens from '../../../assets/img/icons/icon-team-tokens.svg';
import EcosystemDevelopment from '../../../assets/img/icons/icon-ecosystem-development.svg';
import MarketingAdvisors from '../../../assets/img/icons/icon-marketing-advisors.svg';
import Unikorn from '../../../assets/img/icons/icon-unicorn.svg';
import Rabbit from '../../../assets/img/icons/icon-rabbit.svg';
import TokenomicsGraphic from '../../../assets/img/tokenomics-graphic.png';
import {HashLink} from "react-router-hash-link";

export const Tokenomics: React.FC = () => {
    return (
        <div className='tokenomics' >
            <div className='tokenomics__banner'>
                <h3 className='tokenomics__banner-title text-bold text-center'>500,000,00 <span className='text-orange'> LESS Presale</span></h3>
                <p className='tokenomics__banner-secondary text-black-l text-center'>Presale Will Be Bounce.Finance</p>
                <HashLink to='/#swap' className="tokenomics__banner-buy btn text-bold" smooth>Buy  LESS token</HashLink>
            </div>
            <div className="container" id='tokenomics'>
                <h2 className="h1 text-bold text-center">Tokenomics</h2>
                <div className='tokenomics__about'>
                    <div className="tokenomics__cards">
                        <TokenomicsCard picture={TotalSuply} title={'Total Supply: '} amount='1,250,000,000,000'/>
                        <TokenomicsCard picture={PublicSale} title={'Public Sale: '} amount='500,000,000'/>
                        <TokenomicsCard picture={LiquidityLocked} title={'Liquidity Locked: '} amount='187,500,000'
                                        className='left-zero'/>
                        <TokenomicsCard picture={TeamTokens} title={'Ecosystem Development: '} amount='50,000,000'/>
                        <TokenomicsCard picture={EcosystemDevelopment} title={'Ecosystem Development: '}
                                        amount='425,000,000'/>
                        <TokenomicsCard picture={MarketingAdvisors} title={'Marketing & Advisors : '}
                                        amount='87,500,000'/>
                    </div>
                    <div className="tokenomics__graphic">
                        <div className='tokenomics__graphic-bg'></div>
                        <img src={TokenomicsGraphic} alt={'graph'} className="tokenomics__graphic-img"/>
                    </div>
                </div>
                <div  id='swap'/>
                <div className='tokenomics-swap'>
                    <div className='tokenomics-swap__item'>
                        <div className='tokenomics-swap__logo'>
                            <img src={Rabbit} alt="rabbit"/>
                        </div>
                        <div className='tokenomics-swap__content'>
                            <h3 className='tokenomics-swap__title text-bold text-center'>Pancake Swap</h3>
                            <a href={'https://exchange.pancakeswap.finance/#/swap'} target="_blank" rel="noreferrer" className='tokenomics-swap__buy btn text-bold'>Buy</a>
                        </div>
                    </div>
                    <div className='tokenomics-swap__item'>
                        <div className='tokenomics-swap__logo'>
                            <img src={Unikorn} alt="unikorn"/></div>
                        <div className='tokenomics-swap__content'>
                            <h3 className='tokenomics-swap__title text-bold text-center'>UniSwap</h3>
                            <a href={'https://app.uniswap.org/#/swap'} target="_blank" rel="noreferrer" className='tokenomics-swap__buy btn text-bold'>Buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}