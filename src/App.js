import "./App.css";
import Button from "./components/button/button";
import Booking from "./components/form/booking/booking"

import CounterC from "./components/counter/counterC"



function App() {

  const songs = ["The Price of a Mile", "Gott mit uns", "Primo Victoria", "Great War", "The Red Baron"];

  //Return songs as an unordered list
  // function List (props) {
  //   const list = songs.map((song)=> <li>{song}</li>);
  //   return (list)
  // }

  function List () {
    const listButtons = songs.map((song, i)=> <Button key={i.toString()} text={song}></Button>)
    return (listButtons)
  }

 
  return (
    <>
      
      <CounterC /> 
      <Booking />
      <div className="form">
        <Button text="Send"/>
      </div>
      <div className="form2">
      <Button text="Send 2"/>
      </div>
      <ul><List></List></ul>

      <div className="form4">
        {songs.map(
          function(song, index) {
            return(<Button key={index.toString()} text={song}></Button>)
          }
        )}
      </div>
    </>
  );
}

export default App;
