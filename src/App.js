import "./App.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./Components/home/home";
import Header from "./Components/Navbar/Header";
import AboutUsPage from "./Components/AboutUsPage";
import AllScho from "./Components/home/AllScho";
import Team from "./Components/Team/Tea"
import Login from "./Components/loginsigninuser/login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
            <Route
            exact
            path="/ViewAllScholarships"
            element={<AllScho />}
          ></Route>
          <Route exact path="/About-Scholar" element={<AboutUsPage />}></Route>
          <Route exact path="/Team" element={<Team/>}></Route>
          <Route exact path="/login" element={<Login />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
