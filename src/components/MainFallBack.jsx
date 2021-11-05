import React from 'react'
import logo from '../logo.svg';

export default function MainFallBack() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1 className="App-title">...Loading</h1>
      </header>
    </div>
  )
}

