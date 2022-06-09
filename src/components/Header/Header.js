import React from 'react'
import { HeaderStyled } from './headerStyling'
import {BsArrowRepeat} from "react-icons/bs"


export default function Header(props) {
    return (
        <HeaderStyled>
            <div className='container'>
                <h5>random</h5>

                <BsArrowRepeat className='button' onClick={props.random} size={25}/>
            </div>
        </HeaderStyled>
    )
}
