import React from "react";
import ReactDOM from "react-dom";
import Mainview from "./components/Mainview";
import Header from "./components/Header";

const App = () => {
    return (
        <div>
            <Header />
            <Mainview />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
