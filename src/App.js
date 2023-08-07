import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [s1,sets1] = useState()
  let [s2,sets2] = useState()
  let [main,setmain] = useState([])


  const btnhandler = () =>{

    
    const obj = {
      s1:s1,
      s2:s2
    }
      setmain([...main,obj])


      console.log(main);
  }


  return (
    <div className="App">
      <input type='text' onChange={(e)=>{ sets1(e.target.value) }}></input>
      <input type='text' onChange={(e)=>{ sets2(e.target.value) }}></input>
      <input type='button' value="Click Here" onClick={btnhandler}></input>


      {
          main.map((x)=>{
            return(
              <>
                <h1>S1 : {x.s1}</h1>
              </>
            )
          })
      }

    </div>
  );
}

export default App;
