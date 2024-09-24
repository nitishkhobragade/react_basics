import './App.css';
import { useEffect, useState } from 'react';


const App = () => {

  const [text, setText] = useState('');
  const [name, setName] = useState('Nitish');

  // //variation 1 --> Every Render
  // useEffect( () => {
  //   console.log("UI Rendering Done");
  // }); 

  // //variation 2 --> First Render
  // useEffect( () => {
  //   console.log("UI Rendering Done");
  // }, []); 

  // //variation 3 --> ON First Render + Whenever dependency changes
  // useEffect( () => {
  //   console.log("change observed");
  // }, [name]); 

  //variation 4 --> to handle unmounting of a component
  useEffect( () => {
    //addEventListener
  }, []); 

  
  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  return (
 
    <div className='app-js-wrapper'>
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
