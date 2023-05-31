import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
import SearchPage from "./Pages/SearchPage";
import Show from "./Components/Show/Show";

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<ShowPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/show/:id" element={<Show />} />
        </Routes>
    );
}

export default Routers;