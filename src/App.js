
import "./App.css";
import CardList from "./components/CardList";
import data from "./data";

// import { render } from "@testing-library/react";
// import { identifier } from "@babel/types";


function App() {
  
  return (
    <article>
      <CardList users = {data}/>
    </article>
  );
}

export default App;
