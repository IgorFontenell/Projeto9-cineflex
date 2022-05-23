import styled from "styled-components"
import React from 'react';


export default function SeatChair ( { condition, value, index } ) {
    
    const [color, setColor] = React.useState("#C3CFD9");

    function Select () {
        setColor("#8DD7CF");
        
        
    }
    

        if (condition === true) {
        
        return (
            <div onClick={Select}  style={{backgroundColor: color}} key={index}><span>{value}</span></div>
        );
        }   else {
        
        return (
            
            <div onClick={() => alert("Você não pode selecionar esse assento!")} style={{backgroundColor: "#FBE192"}} key={index}><span>{value}</span></div>
        );
    }
    

}

 