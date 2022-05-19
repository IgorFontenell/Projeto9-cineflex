export default function FilmDay (  { weekday, date, hour1, hour2 } ) {

    return (
        <>
        
        <div className="data">
            <span>{weekday} - {date}</span>
            <div className="hours">
                <div className="hour">
                    <span>{hour1}</span>
                </div>
                <div className="hour">
                    <span>{hour2}</span>
                </div>

            </div>

        </div>
        
        </>
        
    );


}