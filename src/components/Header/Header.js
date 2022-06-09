import React from 'react'
import { HeaderStyled } from './headerStyling'
import {TbArrowsRandom} from "react-icons/tb"
export default function Header(props) {
    return (
        <HeaderStyled>
            <div className='container'>
                <h5>random</h5>
                <TbArrowsRandom className='button' onClick={props.random} size={18}/>
            </div>
        </HeaderStyled>
    )
}
