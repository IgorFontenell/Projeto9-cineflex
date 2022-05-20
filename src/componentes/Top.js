import { Link } from "react-router-dom";
import styled from 'styled-components';
export default function Top () {

    return (
        <Link to="/">
            <TopDiv>
                <h1>CINEFLEX</h1>
            </TopDiv>
        </Link>
        
    );

}
const TopDiv = styled.div`

background-color: #C3CFD9;
box-shadow: 0px 0px 5px;
height: 68px;
width: 100%;
position: fixed;
top: 0px;
left: 0px;
display: flex;
align-items: center;
justify-content: center;   

h1 {
    color: #E8833A;
    font-size: 34px;
    font-family: 'Roboto', sans-serif;
}
`