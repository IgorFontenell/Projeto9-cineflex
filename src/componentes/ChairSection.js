import styled from "styled-components";
import Footer from "./Footer";
import Type from "./Type";



export default function ChairSection() {

    let arraySeats = [];
    for (let i = 1; i < 51; i++) {
        if (i < 10) {
        arraySeats.push(`0${i}`);
        } else {
        arraySeats.push(i);
        }
        
    }
    

    return(
        <Container>
            <h2>Selecione o(s) assento(s)</h2>
            <Seats>
                <SeatSeaction>
                    {arraySeats.map(value => <div><span>{value}</span></div>)}
                </SeatSeaction>
                <Meaning>
                    <Type cor="#8DD7CF" text="Selecionado" />
                    <Type cor="#C3CFD9" text="Disponível" />
                    <Type cor="#FBE192" text="Indisponível" />
                </Meaning>
                <Buyer>
                    <span>Nome do comprador:</span>
                    <input placeholder="Digite seu nome..."></input>
                    <span>CPF do comprador:</span>
                    <input placeholder="Digite o seu CPF..."></input>
                </Buyer>
                <Button>
                    <span>Reservar assento(s)</span>  
                </Button>
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
    background-color: #C3CFD9;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 4px;
    border: 1px solid #808F9D;
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