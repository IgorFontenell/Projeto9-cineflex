import React from "react";
import SeatChair from "./SeatChair";


// In this function we callback the arraySeats and rewrite it as a div with the right caracteristics depending on the answer of the server.
export default function SeatChairs (answer) {
    
    

     //Creating an array that has 50 values (1 to 9 is written like "09")
     let arraySeats = [];
     for (let i = 1; i < 51; i++) {
         if (i < 10) {
         arraySeats.push(`0${i}`);
         } else {
         arraySeats.push(i);
         }
     }
     
     
      let arr = arraySeats.map((value, index) => {
         let condition = answer.data.seats[index].isAvailable;
        
             return (
                
                 {condition:condition, index:index, value:value}
             );

     });
    
    
   
    return arr;
}