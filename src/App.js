import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
import SearchPage from "./Pages/SearchPage";
import Header from "./Components/Header";
import logo from "./asset/images/logo.png"
import bgImage from "./asset/images/home-bg.jpg"

function App() {
  return (
    <div className="flex flex-col" style={{backgroundImage:`url(${bgImage})`}}>
      <BrowserRouter>
          <Header logo={logo}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<ShowPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
