import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import FilmDay from "./FilmDay";
import Footer from "./Footer";



export default function FilmDays () {

    let { idFilm } = useParams();
    console.log(idFilm);
    const [filmInfo, setFilmInfo] = React.useState(0);
    
    

    React.useEffect((() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`);
        promise.then(ansewerBack => setFilmInfo({...ansewerBack.data}));
    }),[])
    console.log(filmInfo);
    const { posterURL, title } = filmInfo;
   

    return(
        (filmInfo === 0) ? 
            (<div className="container">
                <h2>Selecione o horário</h2>
                <h2>Imagem Carregando.....</h2>
            </div>) : (
                    <div className="container">
                        <h2>Selecione o horário</h2>
                       {filmInfo.days.map((value, index) => <FilmDay key={index} weekday={value.weekday} date={value.date} showtime1={value.showtimes[0].name} showtime2={value.showtimes[1].name} />)}
                        <Footer title={title} posterURL={posterURL}/>
                </div>
            )
        
    );
}