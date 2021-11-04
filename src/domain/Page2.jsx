import React from 'react'
import logo from '../logo.svg';
import Button from '../components/Button';

export default function Page2({onRouteChange}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1 className="App-title">Page 2</h1>
      </header>
      <div className="flex justify-center gap-x-4 m-2">
        <Button onClick={() => onRouteChange('page1')}>Page 1</Button>
        <Button onClick={() => onRouteChange('page2')} use={'disabled'} >Page 2</Button>
        <Button onClick={() => onRouteChange('page3')}>Page 3</Button>
      </div>
    </div>
  )
}