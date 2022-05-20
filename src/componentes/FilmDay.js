import styled from "styled-components";


export default function FilmDay (  { weekday, date, showtime1, showtime2 } ) {

    return (
        
        
        <Data>
            <span>{weekday} - {date}</span>
            <Hours>
                <Hour>
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
