import styled from "styled-components";

import { yellow } from "../../globalStyles";

export const MainContentStyled = styled.main`
    width: 80vw;
    max-width: 800px;
    
    display: flex;
    flex-direction: column;
    gap: 15vh;

    h1:after{
        content: '';
        width: 0;
        height: 95%;
        position: absolute;
        border: 3px solid ${yellow};
        top: 0;
        left: -4vw;
    }

    h1{
        position: relative;
    }

    .bottomDiv{
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }
`

