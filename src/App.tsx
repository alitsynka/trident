import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {SeoComponent} from "./components/seo/SeoComponent";
import {ModularHousing} from "./components/modular/ModularHousing";
import {Main} from "./components/main/Main";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <ModularHousing/>
            <SeoComponent/>
            <Footer/>
        </div>
    );
}

export default App;
