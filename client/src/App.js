import React from 'react'
//import './App.css'
import LinkContainer from './components/LinkContainer'
import {useEffect, useState} from 'react'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
        .then((data) => setData(data.message))
        
      }, []);
     

  return (
    <div className="App">
      <LinkContainer />
      <p>{ data ? data : "loading"}</p>
    </div>
  )
}

export default App
