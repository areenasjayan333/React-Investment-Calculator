import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const[input,setInput]   = useState({
    initialInvestment:1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:10
        });
     const inputIsValid = input.duration >= 1 ;  
    
    function handleChange(inputIdentifier, newValue){
    setInput((prevInput)=>{
        return {
            ...prevInput,
        [inputIdentifier]:+newValue
        }
    }
    
    );
    }
  return (
    <>
   <Header/>
   <UserInput onChange={handleChange} input={input}/>
   {!inputIsValid && <p className="center">Please enter a duration greater than zero. </p>}
   {inputIsValid && <Result input={input}/>}
   </>
  )
}

export default App
