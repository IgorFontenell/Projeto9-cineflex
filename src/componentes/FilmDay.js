export default function FilmDay (  { weekday, date, showtime1, showtime2 } ) {

    return (
        <>
        
        <div className="data">
            <span>{weekday} - {date}</span>
            <div className="hours">
                <div className="hour">
                    <span>{showtime1}</span>
                </div>
                <div className="hour">
                    <span>{showtime2}</span>
                </div>

            </div>

        </div>
        
        </>
        
    );


}