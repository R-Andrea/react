import "./App.css";
import Button from "./components/button/button";



function App() {

  const songs = ["The Price of a Mile", "Gott mit uns", "Primo Victoria", "Great War", "The Red Baron"];

  //Return songs as an unordered list
  // function List (props) {
  //   const list = songs.map((song)=> <li>{song}</li>);
  //   return (list)
  // }

  function List () {
    const listButtons = songs.map((song)=> <Button text={song}></Button>)
    return (listButtons)
  }

 
  return (
    <>
      <div className="form">
        <Button text="Send"/>
      </div>
      <div className="form2">
      <Button text="Send 2"/>
      </div>
      <ul><List></List></ul>
    </>
  );
}

export default App;
