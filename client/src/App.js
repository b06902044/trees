import React, { Component, useState , useEffect } from 'react';
import './App.css';
import axios from 'axios'


function App(){
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios.get('/api/v1/say-something').then((res) => {
      setResponse(res.data);
    });
  });

  return (
    <div className="App">
        <h1>Here is out new future!</h1>
        <h1>{response.body}</h1>
    </div>
  );
}

export default App;
