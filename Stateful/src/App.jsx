import React from "react";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";


const App = () => {

  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <div className="container">
      <h1 className="title">Stateful</h1>
      <Counter className="counter" text="Counter:" count={count}/>
      <div className="btn-box">
        <Button className="button" text="Click me" type="submit" onClick={increment}/>
        <Button className="button" text="Reset" type="reset" onClick={reset}/>
      </div>
    </div>
  )
}

export default App