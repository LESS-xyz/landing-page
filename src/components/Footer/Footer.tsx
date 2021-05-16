import React from "react";
import './Footer.scss';
import Logo from '../../assets/img/footer-logo.svg';
import {ReactComponent as Twitter} from "../../assets/img/icons/footer-twitter.svg";
import {ReactComponent as Medium} from "../../assets/img/icons/footer-medium.svg";
import {ReactComponent as Telegram} from "../../assets/img/icons/footer-telegram.svg";
import {ReactComponent as Github} from "../../assets/img/icons/footer-github.svg";
import {HashLink} from "react-router-hash-link";

export const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <nav className="footer-nav">
                    <HashLink to='/#' smooth>
                        <img className='footer-nav__logo' src={Logo} alt='LESS logo'/>
                    </HashLink>
                    <ul className='footer-nav__main-nav'>
                        <li className='footer-nav__item'>
                            <HashLink to='/#' className="text-white" smooth>
                                Home
                            </HashLink>
                        </li>
                        <li className='footer-nav__item'>
                            <HashLink to='/#tokenomics' className="text-white" smooth>
                                Tokenomics
                            </HashLink>
                        </li>
                        <li className='footer-nav__item'>
                            <HashLink to='/#ecosystem' className="text-white" smooth>
                                Ecosystem
                            </HashLink>
                        </li>
                        <li className='footer-nav__item'>
                            <HashLink to='/#roadmap' className="text-white" smooth>
                                Roadmap
                            </HashLink>
                        </li>
                    </ul>
                    <ul className='footer-nav__mobile-socials socials'>
                        <li>
                            <a href="https://twitter.com/LessToken" target="_blank" rel="noreferrer" className='socials__item text-gray-xd text-bold'><Twitter/></a>
                        </li>
                        <li>
                            <a href="https://less-token.medium.com" target="_blank" rel="noreferrer"
                               className=' text-gray-xd text-bold'><Medium/></a></li>
                        <li>
                            <a href="https://t.me/lesstokenann" target="_blank" rel="noreferrer" className='socials__item text-gray-xd text-bold'><Telegram/></a></li>
                        <li>
                            <a href="https://github.com/lesstoken" target="_blank" rel="noreferrer" className='socials__item text-gray-xd text-bold'><Github/></a></li>
                    </ul>
                </nav>
                <section className='footer-main'>
                    <p className='footer-main__copyrights'>© 2021 less. All rights reserved</p>
                    <ul className='footer-main__list socials'>
                        <li>
                            <a href="https://twitter.com/LessToken" target="_blank" rel="noreferrer" className='socials__item text-gray-xd text-bold'><Twitter/></a>
                        </li>
                        <li>
                            <a href="https://less-token.medium.com" target="_blank" rel="noreferrer" className='socials__item text-gray-xd text-bold'><Medium/></a></li>
                        <li className='socials__item text-gray-xd text-bold'>
                            <a href="https://t.me/lesstokenann" target="_blank" rel="noreferrer" className='socials__item text-gray-xd text-bold'><Telegram/></a></li>
                        <li>
                            <a href="https://github.com/lesstoken" target="_blank" rel="noreferrer" className='socials__item text-gray-xd text-bold'><Github/></a></li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}