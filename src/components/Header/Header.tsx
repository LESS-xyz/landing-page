import React from "react";
import './Header.scss';
import Logo from '../../assets/img/logo.svg';
import {HashLink, NavHashLink} from 'react-router-hash-link';
import {ReactComponent as Twitter} from "../../assets/img/icons/Twitter.svg";
import {ReactComponent as Medium} from "../../assets/img/icons/Medium.svg";
import {ReactComponent as Telegram} from "../../assets/img/icons/Telegram.svg";
import {ReactComponent as Github} from "../../assets/img/icons/Github.svg";

export const Header:React.FC=()=>{
    return(
        <header className='header'>
            <div className='container'>
                <nav className='header-nav'>
                    <HashLink to='/'>
                        <img src={Logo} className="header-nav__logo" alt='LESS logo'/>
                    </HashLink>
                    <ul className='header-nav__list'>
                        <li className='header-nav__item'>
                            <NavHashLink to='/' className='text-gray-xd text-bold' activeClassName="active" smooth>
                                Home
                            </NavHashLink>
                        </li>
                        <li className='header-nav__item text-gray-xd text-bold'>
                            <NavHashLink to='/#tokenomics' className=' text-gray-xd text-bold' activeClassName="active" smooth>
                                Tokenomics
                            </NavHashLink>
                        </li>
                        <li className='header-nav__item text-gray-xd text-bold'>
                            <NavHashLink to='/#ecosystem' className=' text-gray-xd text-bold' activeClassName="active" smooth>
                                Ecosystem
                            </NavHashLink>
                        </li>
                        <li className='header-nav__item text-gray-xd text-bold'>
                            <NavHashLink to='/#roadmap' className='text-gray-xd text-bold' activeClassName="active" smooth>
                                Roadmap
                            </NavHashLink>
                        </li>
                    </ul>
                    <ul className='header-nav__socials'>
                        <li>
                            <a href="https://twitter.com/LessToken" target="_blank" rel="noreferrer" className='header-nav__socials-item text-gray-xd text-bold'><Twitter/></a>
                        </li>
                        <li>
                            <a href="https://less-token.medium.com" target="_blank" rel="noreferrer" className='header-nav__socials-item text-gray-xd text-bold'><Medium/></a></li>
                        <li>
                            <a href="https://t.me/lesstokenann" target="_blank" rel="noreferrer" className='header-nav__socials-item text-gray-xd text-bold'><Telegram/></a></li>
                        <li>
                            <a href="https://github.com/lesstoken" target="_blank" rel="noreferrer" className='header-nav__socials-item text-gray-xd text-bold'><Github/></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};