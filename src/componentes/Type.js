import styled from "styled-components";
export default function Type ( { cor, text } ) {

    

    return (
                <div>
                    <div className="type" ></div>
                    <span>{text}</span>
                </div>
    );
}

const TypeDiv = styled.div`

    width: 25px;
    height: 25px;
    border-radius: 17px;
    margin: 10px 0px;
    border: 1px solid;


`;