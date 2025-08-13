import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForms from './component/TextForms';
import About from './component/About';
// react router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");

  const tooleMode = () => {

    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = 'black';


    }
  }

  return (
    <>

      <Router>

        <Navbar tittle="Home" mode={Mode} toogle={tooleMode} />

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <TextForms heading='Enter the text to analyze' mode={Mode} />
          </Route>

        </Switch>

      </Router>

    </>

  );
}

export default App;

