import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component
import NavbarComponent from "./components/NavbarComponent";

//pages
import Homepage from "./pages/homepage";
import FirstPage from "./pages/first-pages";
import AboutPage from "./pages/aboutPage";
import ProjectPage from "./pages/projectPage"

function App() {
    return (
        <>
            <BrowserRouter>
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/aboutme" element={<AboutPage />} />
                    <Route path="/project" element={<ProjectPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
