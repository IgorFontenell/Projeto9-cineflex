import { Link } from "react-router-dom";

export default function Film ( { posterURL, id } ) {

return ( 
        <Link to={`/sessoes/${id}`} >
            <li className="poster">
                <img src={posterURL} alt="Filme Carregando..." width="140" height="205" />
            </li>
        </Link>
        
);




}