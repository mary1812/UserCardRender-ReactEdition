
import "./App.css";
import data from "./data";
import UserCard from "./components/Usercard";
// import { render } from "@testing-library/react";
// import { identifier } from "@babel/types";


function App() {
  const {id, firstName, lastName, profilePicture, contacts } = data[1];

  return (
    <article>
      <UserCard id={id} firstName={firstName} lastName={lastName} profilePicture={profilePicture} contacts={contacts}/>
    </article>
  );
}

export default App;
