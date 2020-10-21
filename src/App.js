import React, { useEffect, useState } from 'react';
//import './App.css';

function App() {
  const [numerojono, setNumerojono] = useState("") // "näytölle" tuleva arvo
  const [merkki, setMerkki] = useState(0) // + - * /
  const [ekaArvo, setEka] = useState(0) // talteen otettu arvo

  const lueArvo = (event) => {
    käsittele(event.target.value)
  }

  const käsittele = (arvo) => {
    if (arvo < 10) { // numerot
      if (arvo == 0 && numerojono.length < 1) 
        return
      setNumerojono(numerojono + arvo)
    }
    else if (arvo == 10) { // Clear
      if (numerojono.length > 0)
        setNumerojono(numerojono.slice(0, -1)) // poistaa yhden numeron lopusta
      else
        setNumerojono("")
    }
    else if (arvo < 15) { // merkit + - * /
      if (numerojono.length < 1)
        return
      setMerkki(arvo)
      setEka(eval(numerojono))
      setNumerojono("")
    }
    else { // "=" nappula
      if (merkki == 11) // plus
        setNumerojono(ekaArvo + parseInt(numerojono))
      if (merkki == 12) // miinus
        setNumerojono(ekaArvo - parseInt(numerojono))
      if (merkki == 13) // kerto
        setNumerojono(ekaArvo * parseInt(numerojono))
      if (merkki == 14) // jako
        setNumerojono(ekaArvo / parseInt(numerojono))
    }
  }

  return (
    <div>

      <p>: {numerojono}</p>

      <button onClick = {(event) => lueArvo(event)} value = {1} >1</button>
      <button onClick = {(event) => lueArvo(event)} value = {2} >2</button>
      <button onClick = {(event) => lueArvo(event)} value = {3} >3</button> <br />
      <button onClick = {(event) => lueArvo(event)} value = {4} >4</button>
      <button onClick = {(event) => lueArvo(event)} value = {5} >5</button>
      <button onClick = {(event) => lueArvo(event)} value = {6} >6</button> <br />
      <button onClick = {(event) => lueArvo(event)} value = {7} >7</button>
      <button onClick = {(event) => lueArvo(event)} value = {8} >8</button>
      <button onClick = {(event) => lueArvo(event)} value = {9} >9</button> <br />
      <button onClick = {(event) => lueArvo(event)} value = {0} >0</button> <br />
      <button onClick = {(event) => lueArvo(event)} value = {10} >C</button> 
      <button onClick = {(event) => lueArvo(event)} value = {11} >+</button> 
      <button onClick = {(event) => lueArvo(event)} value = {12} >-</button>
      <button onClick = {(event) => lueArvo(event)} value = {13} >*</button>
      <button onClick = {(event) => lueArvo(event)} value = {14} >/</button> <br />
      <button onClick = {(event) => lueArvo(event)} value = {15} >=</button>
    </div>
  );
}

export default App;
