import React from 'react';    // 1️⃣
import './App.css';           // 2️⃣

function App() {              // 3️⃣
  // we can write JS here :)  // 4️⃣
  const age = 38;              // ADDED
  const name = "Annika";  

  return (                    // 5️⃣
    <div>
      <h1>Hello World</h1> 
      <p> This is a paragraph of text</p>
      <p> My name is {name} and I'm {age} years old</p>

     </div>
  );                          // 7️⃣
}                             // 8️⃣

export default App;  