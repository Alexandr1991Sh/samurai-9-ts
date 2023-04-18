import React from 'react';
import './App.css';
import Technologies from "./Components/Tehnologies";
import Header from "./Components/Header";

const App = () => {
    return (
        <div className="App">
            Hello, samurai! Let's go!
            <Header/>
            <Technologies/>
        </div>
    );
}

export default App;
