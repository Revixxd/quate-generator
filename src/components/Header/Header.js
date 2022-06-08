import React from 'react'
import { HeaderStyled } from './headerStyling'
import {TbArrowsRandom} from "react-icons/tb"
export default function Header(props) {
    return (
        <HeaderStyled>

            <button onClick={props.random}>random</button>
            <TbArrowsRandom size={22}/>
        </HeaderStyled>
    )
}
