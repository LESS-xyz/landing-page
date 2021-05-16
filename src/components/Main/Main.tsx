import React from "react";
import './Main.scss';
import {Overview} from "./Overview/Overview";
import {Tokenomics} from "./Tokenomics/Tokenomics";
import {Ecosystem} from "./Ecosystem/Ecosystem";
import {Roadmap} from "./Roadmap/Roadmap";

export const Main:React.FC=()=>{
    return(
        <main className='main'>
            <Overview/>
            <Tokenomics/>
            <Ecosystem/>
            <Roadmap/>
        </main>
    )
}