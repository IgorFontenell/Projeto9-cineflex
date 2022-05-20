import Footer from "./Footer";
import Type from "./Type";



export default function ChairSection() {

    let arraySeats = [];
    for (let i = 1; i < 51; i++) {
        if (i < 10) {
        arraySeats.push(`0${i}`);
        } else {
        arraySeats.push(i);
        }
        
    }
    

    return(
        <div className="container">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
                <div className="seatSection">
                    {arraySeats.map(value => <div><span>{value}</span></div>)}
                </div>
                <div className="meaning">
                    <Type cor="#8DD7CF" text="Selecionado" />
                    <Type cor="#C3CFD9" text="Disponível" />
                    <Type cor="#FBE192" text="Indisponível" />
                </div>
                <div className="buyer">
                    <span>Nome do comprador:</span>
                    <input placeholder="Digite seu nome..."></input>
                    <span>CPF do comprador:</span>
                    <input placeholder="Digite o seu CPF..."></input>
                </div>
                <div className="button">
                    <span>Reservar assento(s)</span>  
                </div>
            </div>
            <Footer />
        
        </div>
    );

}