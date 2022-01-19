import React from "react";
import ReactDom from "react-dom";

// Referencia al componente About
import {App} from "./containers/App"

ReactDom.render (
    <App />, // Lo que quiero mostrar
    document.getElementById('root') //Y donde lo quiero mostrar
)