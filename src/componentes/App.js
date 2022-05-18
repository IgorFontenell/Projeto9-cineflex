import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmHours from "./FilmHours";
import Films from "./Films";
import Top from "./Top";





export default function App () {




    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/" element={<Films />}></Route>
                <Route path="/sessoes/idFilme" element={<FilmHours />}></Route>
            </Routes>
        </BrowserRouter>
         
    );



}