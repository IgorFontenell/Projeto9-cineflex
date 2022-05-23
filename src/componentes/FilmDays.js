import { useParams } from "react-router-dom";
import styled from "styled-components"
import axios from "axios";
import React from "react";
import FilmDay from "./FilmDay";
import Footer from "./Footer";



export default function FilmDays () {

    let { idFilm } = useParams();
    
    const [filmInfo, setFilmInfo] = React.useState(0);
    
    

    React.useEffect((() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`);
        promise.then(ansewerBack => setFilmInfo({...ansewerBack.data}));
    }),[])
    
    const { posterURL, title } = filmInfo;
   

    return(
        (filmInfo === 0) ? 
            (<Container>
                <h2>Selecione o horário</h2>
                <h2>Imagem Carregando.....</h2>
            </Container>) : (
                    <Container>
                        <h2>Selecione o horário</h2>
                       {filmInfo.days.map((value, index) => <FilmDay key={index} weekday={value.weekday} date={value.date} showtime1={value.showtimes[0].name} id1={value.showtimes[0].id} showtime2={value.showtimes[1].name} id2={value.showtimes[1].id} />)}
                        <Footer title={title} posterURL={posterURL}/>
                </Container>
            )
        
    );
}

const Container = styled.div`

    margin-top: 68px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 117px;

    h2 {
    display: inline-block;
    margin: 20px 0px;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;

    }
`;