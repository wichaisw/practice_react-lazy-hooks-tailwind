import React, { useState } from 'react'
import logo from '../../logo.svg';
import Button from '../../components/Button';

export default function Page2({onRouteChange}) {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number+ 1, number + 2]
  }

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1 className="App-title">Page 2: useCallback</h1>
      </header>
      <nav>
        <div className="flex justify-center gap-x-4 m-2">
          <Button onClick={() => onRouteChange('page1')} children={'Page 1'} />
          <Button onClick={() => onRouteChange('page2')} use={'disabled'} children={'Page 2'} />
          <Button onClick={() => onRouteChange('page3')} children={'Page 3'} />
        </div>
      </nav>
      <main>
        <div className="flex justify-center gap-x-2 my-4 bg-black p-2">
          <input className="p-2" type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
          <Button onClick={() => setDark(prevDark => !prevDark)}  children={'Focus'} />
        </div>
      </main>
    </div>
  )
}
