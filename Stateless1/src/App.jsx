import Button from "./components/Button.jsx";
import React from "react";

const App = () => {

  return (
    <div className="container">
      <h1 className="title">Stateless</h1>
      <div className="btn-box">
        <Button className="button" text="Click me" type="submit"/>
        <Button className="button" text="Reset" type="reset"/>
      </div>
    </div>
  )
}

export default App