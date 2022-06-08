import React from 'react'
import { HeaderStyled } from './headerStyling'
import {TbArrowsRandom} from "react-icons/tb"
export default function Header(props) {
    return (
        <HeaderStyled>
            <div className='container'>
                <TbArrowsRandom onClick={props.random} size={22}/>
            </div>
        </HeaderStyled>
    )
}
