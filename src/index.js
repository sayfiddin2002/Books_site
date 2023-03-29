import ReactDom from "react-dom";
import React from "react";
import "./scss/style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import John from "./John";
import Amazon from "./Amazon";
import Coffe from "./Coffe";
import Book from "./Book";
import Pages from "./Pages";
import Word from "./Word";
import Many from "./Many";
import Update from "./Update";
import Footer from "./Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




ReactDom.render(
    <div>
        <Navbar />
        <Home />
        <About />
        <John />
        <Amazon />
        <Coffe />
        <Book/>
        <Pages/>
        <Word/>
        <Many/>
        <Update/>
        <Footer/>
    </div>,
    document.querySelector("#root")
)