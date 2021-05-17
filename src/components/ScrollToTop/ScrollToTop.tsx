import React, {useEffect, useState} from "react";
import ArrowRight from "../../assets/img/icons/icon-arrow-right.svg";
import './ScrollToTop.scss';
import {HashLink} from "react-router-hash-link";

export const ScrollToTop:React.FC=()=>{
    const [isHidden,setIsHidden]=useState<boolean>(true);
    useEffect(()=>{
        function handleScroll() {
            const scrollTop = window.scrollY;

            if(scrollTop>800){
                setIsHidden(false);
            }else setIsHidden(true);
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll);
    })

    return(
        <HashLink to="/#" className={`scroll-to-top ${isHidden?'scroll-to-top-hidden':''}`} smooth>
            <img src={ArrowRight} alt='scroll-to-top'/>
        </HashLink>
    )
}