export default function Footer ( { title, posterURL } ) {

    return (
            <div className="footer">
                <div>
                    <img src={posterURL} alt="Imagem Carregando..." width="48" height="72" />
                </div>
                <span>{title}</span>
            </div>
    );

}