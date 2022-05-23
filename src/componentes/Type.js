import styled from "styled-components";
export default function Type ( { cor, text, border } ) {

    

    return (
                <div>
                    <TypeDiv cor={cor} border={border} ></TypeDiv>
                    <span>{text}</span>
                </div>
    );
}

const TypeDiv = styled.div`
    background-color: ${props => props.cor};
    width: 25px;
    height: 25px;
    border-radius: 17px;
    margin: 10px 0px;
    border: 1px solid ${props => props.border};

`;