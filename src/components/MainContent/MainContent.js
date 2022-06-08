import {MainContentStyled} from "./mainContentStyling"
export default function MainContent(props){
    return(
        <MainContentStyled>
                <h1>“{props.data.quoteText}”</h1>
            
            <div className="bottomDiv">
                <h3>{props.data.quoteAuthor}</h3>
            </div>
        </MainContentStyled>
    )
}