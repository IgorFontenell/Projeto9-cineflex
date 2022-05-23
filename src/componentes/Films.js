import axios from "axios";
import React from "react";
import styled from "styled-components";


import Film from "./Film";





export default function Films () {

    const [film, setFilm] = React.useState([]);

    React.useEffect(() => {
        let promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(object => {
        setFilm([...object.data])});
    },[])

    

   
    return (
        <Container>
            <h2>Selecione o filme</h2>
            <Posters>
               {film.map((value, index) => <Film id={value.id} key={index} posterURL={value.posterURL}/>)}
            </Posters>
        </Container>
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

const Posters = styled.ul`

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;