import React, { useState, useRef, useEffect } from 'react'
import logo from '../logo.svg';
import Button from '../components/Button';

export default function Page1({ onRouteChange }) {
  const [name, setName] = useState('');
  const inputRef = useRef();
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name])


  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1 className="App-title">Page 1</h1>
      </header>
      <main>
        <div className="flex justify-center gap-x-4 m-2">
          <Button onClick={() => onRouteChange('page1')} use={'disabled'} children={'Page 1'} />
          <Button onClick={() => onRouteChange('page2')} children={'Page 2'} />
          <Button onClick={() => onRouteChange('page3')} children={'Page 3'} />
        </div>
        <div className="flex justify-center gap-x-2 my-4 bg-black p-2">
          <input className="p-2" type="text" ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
          <Button onClick={focus}  children={'Focus'} />
        </div>
        <p>My name is {name} and it used to be {prevName.current}</p>
      </main>
    </div>
  )
}
