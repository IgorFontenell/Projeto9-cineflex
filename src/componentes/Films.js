import axios from "axios";
import React from "react";



import Film from "./Film";





export default function Films () {

    const [film, setFilm] = React.useState([]);

    React.useEffect(() => {
        let promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(object => {
        setFilm([...object.data])});
    },[])

    console.log(film);

   
    return (
        <div className="container">
            <h2>Selecione o filme</h2>
            <ul className="posters">
               {film.map((value, index) => <Film key={index} posterURL={value.posterURL}/>)}
            </ul>
            
            
        </div>
    );



}