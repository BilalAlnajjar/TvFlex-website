import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
import SearchPage from "./Pages/SearchPage";
import Header from "./Components/Header";
import logo from "./asset/images/logo.png"
import bgImage from "./asset/images/home-bg.jpg"
import Show from "./Components/Show/Show";
import {useContext} from "react";
import Loading from "./Components/Loading";
import {LoadingShowProvider} from "./Context/LoadingContext";
import Routers from "./routers";
import MoviesListProvider from "./provider/MoviesListProvider";

function App() {
    return (
    <div className="flex flex-col" style={{backgroundImage:`url(${bgImage})`}}>
      <BrowserRouter>
          <Header logo={logo}/>
          <MoviesListProvider>
              <Routers />
          </MoviesListProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
