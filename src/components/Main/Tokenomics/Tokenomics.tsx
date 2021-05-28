import React from "react";
import './Tokenomics.scss';
import {TokenomicsCard} from "./TokenomicsCard/TokenomicsCard";
import TotalSuply from '../../../assets/img/icons/icon-total-suply.svg';
import PublicSale from '../../../assets/img/icons/icon-public-sale.svg';
import PancakeUniswap from '../../../assets/img/icons/icon-pancake-uniswap.svg';
import UniswapPancake from '../../../assets/img/icons/icon-uniswap-pancake.svg';
import TeamTokens from '../../../assets/img/icons/icon-team-tokens.svg';
import EcosystemDevelopment from '../../../assets/img/icons/icon-ecosystem-development.svg';
import MarketingAdvisors from '../../../assets/img/icons/icon-marketing-advisors.svg';
import Unikorn from '../../../assets/img/icons/icon-unicorn.svg';
import UniswapBg from '../../../assets/img/uniswap-bg-m.svg';
import Rabbit from '../../../assets/img/icons/icon-rabbit.svg';
import PancakeBg from '../../../assets/img/pancake-bg-m.svg';
import Bridge from '../../../assets/img/icons/icon-bridge.svg';
import BridgeBg from '../../../assets/img/bridge-bg-m.svg';
import TokenomicsGraphic from '../../../assets/img/tokenomics-graphic.svg';

export const Tokenomics: React.FC = () => {
    return (
        <div className='tokenomics' >
            <div className='tokenomics__banner'>
                <h3 className='tokenomics__banner-title text-bold text-center'>50,000,000 <span className='text-orange'> LESS Presale</span></h3>
                <p className='tokenomics__banner-secondary text-black-l text-center'>Presale Will Be On Bounce.Finance</p>
                <a href="https://app.bounce.finance/fixed-swap/5864" target="_blank" rel="noreferrer noopener" className="tokenomics__banner-buy btn text-bold">Buy  LESS token</a>
            </div>
            <div className="container" id='tokenomics'>
                <h2 className="h1 text-bold text-center">Tokenomics</h2>
                <div className='tokenomics__about'>
                    <div className="tokenomics__cards">
                        <TokenomicsCard picture={TotalSuply} title={'Total Supply: '} amount='125,000,000' sub="LESS"/>
                        <TokenomicsCard picture={PublicSale} title={'Presale: '} amount='50,000,000' sub="LESS 40%"/>
                        <TokenomicsCard picture={UniswapPancake} title={'Uniswap Liquidy: '} amount='12,500,000' sub="LESS 10%"
                                        className='left-zero'/>
                        <TokenomicsCard picture={PancakeUniswap} title={'PancakeSWAP: '} amount='6,250,000' sub="LESS 5%"
                                        className='left-zero'/>
                        <TokenomicsCard picture={TeamTokens} title={'Team:'} amount='5,000,000' sub="LESS 4% LOCKED 1 Year"/>
                        <TokenomicsCard picture={EcosystemDevelopment} title={'Marketing: '}
                                        amount='8,750,000' sub="LESS 7% Locked 3 Months"/>
                        <TokenomicsCard picture={MarketingAdvisors} title={'Ecosystem (Products) '}
                                        amount='42,500,000' sub="34% Locked"/>
                    </div>
                    <div className="tokenomics__graphic">
                        <div className='tokenomics__graphic-bg'></div>
                        <img src={TokenomicsGraphic} alt={'graph'} className="tokenomics__graphic-img"/>
                    </div>
                </div>
                <div  id='swap'/>
                <div className='tokenomics-swap'>
                    <div className='tokenomics-swap__item swap-uniswap'>
                        <div className='tokenomics-swap__logo'>
                            <img src={Unikorn} alt="unikorn"/></div>
                        <div className='tokenomics-swap__content'>
                            <h3 className='tokenomics-swap__title text-bold text-center'>UniSwap</h3>
                            <a href={'https://app.uniswap.org/#/swap'} target="_blank" rel="noreferrer" className='tokenomics-swap__buy btn text-bold'>Buy</a>
                        </div>
                        <img src={UniswapBg } className="tokenomics-swap__bg swap-uniswap-bg"/>

                    </div>
                    <div className='tokenomics-swap__item swap-bridge'>
                        <div className='tokenomics-swap__logo'>
                            <img src={Bridge} alt="unikorn"/></div>
                        <div className='tokenomics-swap__content'>
                            <h3 className='tokenomics-swap__title text-bold text-center'>Bridge Less</h3>
                            <a href={'https://bridge.less.xyz/'} target="_blank" rel="noreferrer" className='tokenomics-swap__buy btn text-bold'>Go to bridge</a>
                        </div>
                        <img src={BridgeBg } className="tokenomics-swap__bg swap-bridge-bg"/>
                    </div>
                    <div className='tokenomics-swap__item  swap-pancake'>
                        <div className='tokenomics-swap__logo'>
                            <img src={Rabbit} alt="rabbit"/>
                        </div>
                        <div className='tokenomics-swap__content'>
                            <h3 className='tokenomics-swap__title text-bold text-center'>Pancake Swap</h3>
                            <a href={'https://exchange.pancakeswap.finance/#/swap'} target="_blank" rel="noreferrer" className='tokenomics-swap__buy btn text-bold'>Buy</a>
                        </div>
                        <img src={PancakeBg } className="tokenomics-swap__bg swap-pancake-bg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}