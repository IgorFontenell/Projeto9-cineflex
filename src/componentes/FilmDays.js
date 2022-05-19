import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import FilmDay from "./FilmDay";



export default function FilmDays () {

    let { idFilm } = useParams();
    console.log(idFilm);
    const [filmInfo, setFilmInfo] = React.useState(0);
    
    

    React.useEffect((() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`);
        promise.then(ansewerBack => setFilmInfo({...ansewerBack.data}));
    }),[])
    console.log(filmInfo);
    const { weekday, date, showtimes: [hour1, hour2] } = filmInfo

    return(
        (filmInfo === 0) ? 
            (<div className="container">
                <h2>Selecione o horário</h2>
                <h2>Imagem Carregando.....</h2>
            </div>) : (
                    <div className="container">
                        <h2>Selecione o horário</h2>
                        <FilmDay weekday={weekday} date={date} hour1={hour1} hour2={hour2} />
                        <FilmDay />
                        <FilmDay />
                        <FilmDay />
                        <FilmDay />
                        <FilmDay />
        
                </div>
            )
        
    );
}