import { useState } from 'react'
import './App.css'

function App() {
  const  [quote, setQuote]= useState("Greater is he that is in you than he that is in the world");

  const fetchNewQuote= () => {
      const quotes = [

     "The only limit to our realization of tomorrow is our doubts of today.",
      "Do not watch the clock; do what it does. Keep going.",
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
      "The best way to predict the future is to invent it."

      ];

      const randomQuote = quotes [Math.floor(Math.random()  * quotes.length)];
      setQuote(randomQuote);
      };


  return (
    <div>
      <h1>Random Quote</h1>
      <p>{quote}</p>
      <button className="btn btn-primary mt-4" onClick={fetchNewQuote}>New Quote</button>
    </div>
  
  );
}
export default App
