
import "./App.css";
import CardList from "./components/CardList";
import data from "./data";


function App() {
  
  return (
    <article>
      <CardList users = {data}/>
    </article>
  );
}

export default App;
