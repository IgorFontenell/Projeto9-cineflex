export default function Film ( { posterURL } ) {

return ( 
        <li className="poster">
            <img src={posterURL} alt="Filme Carregando..." width="140" height="205" />
        </li>
);




}