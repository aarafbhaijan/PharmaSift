// import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "@mui/material";
import logo from "./pngLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SharePrisc from "./Components/SharePrisc/SharePrisc";
import SignIn from "./Components/SignIn/SignIn";
import CompareMed from "./Components/CompareMed/CompareMed";
import Footer from "./Components/Footer.jsx/Footer";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  const [hamCurr, setHamCurr] = useState(false);
  return (
    <>
      <div className="scroll-smooth box-border font-[Montserrat] w-screen  min-h-lvh  bg-gradient-to-t from-green-200 to-sky-200">
        <Header />
        <Container maxWidth={"xl"}>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<SharePrisc />} path="/shareprisc" />
            <Route element={<CompareMed />} path="/compare" />
            <Route element={<SignIn />} path="/signin" />
            <Route element={<SignUp />} path="/signup" />
          </Routes>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
