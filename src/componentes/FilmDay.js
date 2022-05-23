import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";


export default function FilmDay (  { idFilm, weekday, date, showtime1, showtime2 } ) {

    const [day, setDay] = React.useState("");
    const [hour, setHour] = React.useState("");

    

    function Click (day, hour) {
        setDay(day);
        setHour(hour);
        
    }
    console.log(weekday,hour);

    return (
        
       
        <Data>
            <span>{weekday} - {date}</span>
            <Hours>
                    <Hour onClick={() => Click(weekday, showtime1)}>
                        <span>{showtime1}</span>
                    </Hour>
                    <Hour>
                        <span>{showtime2}</span>
                    </Hour>
            </Hours>
        </Data>
        
        
        
        
       
        
    );


}

const Data = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;

    > span {
    font-size: 20px;
    margin-bottom: 35px;
    font-family: 'Roboto', sans-serif;
    }

`
const Hours = styled.div`
    display: flex;
    
    
`;
const Hour = styled.div`

    background-color: #E8833A;
    width: 84px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin-right: 20px;

    span {
    color: #FFFFFF;
    font-size: 18px;
    }
`;


