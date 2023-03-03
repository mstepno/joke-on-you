import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import './style.css';
function Joke({ joke }) {
  return (
    <div>
      {joke.type === 'single' ? <p>{joke.joke}</p> : <><p>{joke.setup}</p><p>{joke.delivery}</p></>}
    </div>
  );
}
function Jokes({ jokes }) {
  return (
    <div>
      {jokes.map((joke, index) => (
        <Joke key={index} joke={joke} />
      ))}
    </div>
  );
}
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then((response) => response.json())
      .then((data) => setJokes(data.jokes));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes about programming</h1>
      </header>
      <Jokes jokes={jokes} />
    </div>
  );
}

export default App;
