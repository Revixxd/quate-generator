import {MainContentStyled} from "./mainContentStyling"
import Zoom from 'react-reveal/Zoom';
export default function MainContent(props){

    return(
        <MainContentStyled>
            <Zoom spy={props.data}>
                <h1>“{props.data.quoteText}”</h1>
            <div className="bottomDiv">
                <h3>{props.data.quoteAuthor}</h3>
            </div>
            </Zoom>
        </MainContentStyled>
    )
}