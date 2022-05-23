import { useParams, Link } from "react-router-dom";
import React from 'react';
import axios from "axios";
import styled from "styled-components";
import Footer from "./Footer";
import Type from "./Type";
import SeatChairs from "./SeatChairs";
import FilmDay from "./FilmDay";
import SeatChair from "./SeatChair";



export default function ChairSection() {

    //Getting the id of the section
    const { idSessao } = useParams();
    //Creating a estate variable of the state of the seats that is going to be written in our HTML
    const [seats, setSeats] = React.useState([]);
    
    
    
   
    //Here we have a function that happens only once. It get the info of the server and runs the code SeatChairs with the response as parameter
    React.useEffect((() => {
        
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(answered => {
            let test = SeatChairs(answered);
            setSeats([...test]);
        });
         
       
    }), []);
    
    
      
    
    
    






    return(
        <Container>
            <h2>Selecione o(s) assento(s)</h2>
            <Seats>
                <SeatSeaction>
                     {(seats === []) ? (<span>Carregando....</span>): (seats.map(value => <SeatChair condition={value.condition} index={value.index} value={value.value} />))} 
                </SeatSeaction>
                <Meaning>
                    <Type cor="#8DD7CF" text="Selecionado" border="#1AAE9E" />
                    <Type cor="#C3CFD9" text="Disponível" border="#7B8B99" />
                    <Type cor="#FBE192" text="Indisponível" border="#F7C52B" />
                </Meaning>
                <Buyer>
                    <span>Nome do comprador:</span>
                    <input placeholder="Digite seu nome..."></input>
                    <span>CPF do comprador:</span>
                    <input placeholder="Digite o seu CPF..."></input>
                </Buyer>
                <Link to="/sucesso">
                <Button>
                    <span>Reservar assento(s)</span>  
                </Button>
                </Link>
            </Seats>
            <Footer />
        
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
    a {
        text-decoration: none;
    }
`;
const Seats = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 117px;

`;
const SeatSeaction = styled.div`

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 2px 16px;

    div {
    background-color: ${props => props.cor};
    width: 26px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 4px;
    border: 1px solid #808F9D;
    cursor: pointer;
    }
   
    span {
    font-size: 11px;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    }
`;
const Meaning = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    span {
    font-family: 'Roboto', sans-serif;
    color: #4E5A65;
    font-size: 13px;
    }
`;
const Buyer = styled.div`

    margin: 40px 10px;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
    margin-top: 10px;
    }
    
    input {
    font-size: 18px;
    margin-top: 8px;
    height: 50px;
    width: 100%;
    padding-left: 10px;
    border: 1px solid lightgrey;
    color: grey;
    }
`;
const Button = styled.div`
    
    height: 42px;
    width: 225px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background-color: #E8833A;
    border-radius: 3px;
    font-size: 18px;

    
`;