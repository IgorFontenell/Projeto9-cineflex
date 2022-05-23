import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success () {

    
    return (
        <Container>
            <span>Pedido feito com sucesso</span>
            <Resume>
                <h3>Filme e sessão</h3>
                <span>Enola Holmes</span>
                <span>24/06/2021 15:00</span>
                <h3>Ingressos</h3>
                <span>Assento 15</span>
                <span>Assento 16</span>
                <h3>Comprador</h3>
                <span>Nome: Igor Fontenelle Teixeira</span>
                <span>CPF: 123.321.459-66 </span>
            </Resume>
            <Link to="/">
                <Button>
                        <span>Voltar pra Home</span>  
                </Button>
            </Link>
        </Container>
        
    );
}

const Container = styled.div`

    margin-top: 68px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    > span {
    display: inline-block;
    margin-top: 40px;
    display: flex;
    width: 150px;
    flex-wrap: wrap;
    color: #247A6B;
    font-weight: bold;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
`;
const Resume = styled.div`
    width:100%;
    margin-left: 30px;
    display: flex;
    flex-direction: column;

    h3 {
    display: inline-block;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 5px;
    font-size: 24px;
    }
    span {
        display: inline-block;
        margin-bottom: 5px;
        font-size: 22px;
        font-family: 'Roboto', sans-serif;
        color: #293845;
    }

`;
const Button = styled.div`
    margin-top: 60px;
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