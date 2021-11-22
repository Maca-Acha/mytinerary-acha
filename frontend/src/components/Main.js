import { BsArrowRightShort } from "react-icons/bs";

export default function Navigations(){
    const flecha = <BsArrowRightShort />
    return(
        <div className="texto-centro" id="main-principal">              
            <section className="subtitulo"> 
                <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
            </section>
            <a href="/cities" className="btn-home">Choose your destination <span className="icono-flecha">{flecha}</span></a>
        </div>
    )
}

{/* <iframe src="https://www.youtube.com/watch?v=phCArrujlTk" /> */}