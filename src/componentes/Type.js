export default function Type ( { cor, text } ) {

    

    return (
                <div>
                    <div className="type" style={{backgroundColor: cor}}></div>
                    <span>{text}</span>
                </div>
    );
}