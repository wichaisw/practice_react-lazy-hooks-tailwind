import React, { useState, useCallback } from 'react'
import logo from '../../logo.svg';
import Button from '../../components/Button';
import List from '../../components/List';

export default function Page2({onRouteChange}) {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  /* getItems is being re-created every time we render Page2 component
  so getItems in List's useEffect is changed and trigger functions inside it too. */
  const getItems = useCallback((incrementer) => {
    return [number + incrementer, number + incrementer + 1, number + incrementer + 2]
  }, [number]);

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
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
      <main className="py-2" style={theme}>
        <div className="flex justify-center gap-x-2 my-4 bg-black p-2">
          <input className="p-2 text-black" type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
          <Button onClick={() => setDark(prevDark => !prevDark)}  children={'Toggle'} />
        </div>
        <List  style={theme} getItems={getItems} />
      </main>
    </div>
  )
}
