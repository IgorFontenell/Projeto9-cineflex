import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmDays from "./FilmDays";
import Films from "./Films";
import Top from "./Top";
import "./Assets/styles/reset.css";
import "./Assets/styles/style.css";




export default function App () {

    

    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/" element={<Films />} />
                <Route path="/sessoes/:idFilm" element={<FilmDays />} />
            </Routes>
        </BrowserRouter>
         
    );



}