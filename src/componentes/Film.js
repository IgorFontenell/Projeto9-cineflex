import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Film ( { posterURL, id } ) {

return ( 
        <Link to={`/sessoes/${id}`} >
            <Poster>
                <img src={posterURL} alt="Filme Carregando..." width="140" height="205" />
            </Poster>
        </Link>
        
);




}

const Poster = styled.li`

    margin: 20px 10px;
    width: 160px;
    height: 230px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 3px grey;

    &:hover {
        cursor: pointer;
    }
`;