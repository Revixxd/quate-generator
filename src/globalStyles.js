import { createGlobalStyle } from 'styled-components'
const black = "#000000"
const gray1 = "#828282"
const gray2 = "#4F4F4F"
const yellow = "#F7DF94"
export {black,gray1,gray2,yellow}
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        color:black;
        h1{
            font-weight: 500;
        }
        h3{
            font-weight: 700;
        }
        h5{
            font-weight: 500;
            color: ${gray1};
        }
        footer{
            color: ${gray2};
        }
    }
    .app{
        height:100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

