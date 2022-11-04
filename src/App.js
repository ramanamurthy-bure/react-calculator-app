import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0);
  
  const onChangeEventHandler = e=>{
    setInput(e.target.value);
  }

  const onClickEventHandler = e=>{
    if(input==='' || input.is)
    {
      alert("Please enter the valid expression");
    }else
    {
      setResult(eval(input));
    }    
  }

  const onClickEventHandlerForButton = e=>{
    setResult(input+'1');
  }

  return (
    <div>
      <center>
        <input type ='text' name='input' value={input} onChange={onChangeEventHandler}></input>
        <br/>
        <button onClick={onClickEventHandler}>Evaluvate</button>
        <br/>
        <h4>Result : {result}</h4>
        <br/>
        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button><br/>

        <button onClick={()=>setInput(input+'6')}>6</button>
        <button onClick={()=>setInput(input+'7')}>7</button>
        <button onClick={()=>setInput(input+'8')}>8</button>
        <button onClick={()=>setInput(input+'9')}>9</button>
        <button onClick={()=>setInput(input+'0')}>0</button><br/>

        <button onClick={()=>setInput(input+'+')}>+</button>
        <button onClick={()=>setInput(input+'-')}>-</button>
        <button onClick={()=>setInput(input+'*')}>*</button>
        <button onClick={()=>setInput(input+'/')}>/</button>
        <button onClick={()=>setInput('')}>clr</button><br/>
      </center>    
    </div>
  )
}

export default App;