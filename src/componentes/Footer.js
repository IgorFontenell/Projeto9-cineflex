import styled from "styled-components";

export default function Footer ( { title, posterURL, data, hour } ) {

    return (
            <FooterDiv>
                <div>
                    <img src={posterURL} alt="Imagem Carregando..." width="48" height="72" />
                </div>
                <span>{title}</span>
                <span>{data}  {hour}</span>
            </FooterDiv>
    );

}

const FooterDiv = styled.div`

    background-color: #DFE6ED;
    width: 100%;
    height: 117px;
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 10px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    border: 1px solid #9EADBA;
    box-shadow: 0px 0px 2px grey;

    div {
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 2px;
    box-shadow: 0px 0px 5px 1px grey;
    }

    span {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    }


`