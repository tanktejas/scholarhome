import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./Components/home/home";
import Header from "./Components/Navbar/Header";
import AboutUsPage from "./Components/About/AboutUsPage";
import AllScho from "./Components/home/AllScho";
import Login from "./Components/loginsigninuser/login";
import Team from "./Components/Team/Team";
import Details from "./Components/Details/Details";
import AllCard from "./Components/Scholarship detail/schodetail";

import Contact from "./Components/Contact/Contact";
import Dataform from "./Components/dataform/dataform";
import StudyAtG from "./Components/study/StudyAtR.js";
import StudyAtR from "./Components/study/StudyAtR.js";
import StudyAtUK from "./Components/study/StudyAtUK";
import StudyAtCa from "./Components/study/StudyAtCa";
import StudyAtU from "./Components/study/StudyAtU.js";
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
          <Route exact path="/Team" element={<Team />}></Route>
          <Route exact path="/scholarship-info" element={<Details />}></Route>
          <Route exact path="/login" element={<Login />}></Route>

          <Route exact path="/form" element={<Dataform/>}></Route>

          <Route
            exact
            path="/scholarship/:schoid"
            element={<AllCard />}
          ></Route>
          <Route exact path="/contact" element={<Contact />}></Route>

          <Route exact path="/study-at-rusia" element={<StudyAtR/>}></Route>
          <Route exact path="/study-at-ukrain" element={<StudyAtUK/>}></Route>
          <Route exact path="/study-at-germany" element={<StudyAtG/>}></Route>
          <Route exact path="/study-at-canada" element={<StudyAtCa/>}></Route>
          <Route exact path="/study-at-us" element={<StudyAtU/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
