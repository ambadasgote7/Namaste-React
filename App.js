
import React from "react";
import {ReactDOM, createRoot} from "react-dom/client";

// React Element
// const heading = React.createElement("h1", {id : "heading"}, "Namaste React 🧑‍💻");

// JSX - HTML-like syntax
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

const Title = function () {
    return <h1 id="title">This is Title</h1>
};
    

// Functional Components
const Heading = () => (
    <div id="container">
        <Title/>
        <h1>Hello</h1>
    </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<Heading/>);