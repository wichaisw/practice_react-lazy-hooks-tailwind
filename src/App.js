import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Page1 from './domain/Page1';
import Page2 from './domain/Page2';
import Page3 from './domain/Page3';

function App() {
  const [ route, setRoute ] = useState('page1');

  const onRouteChange = (route) => {
    setRoute(route);
  }

  const renderPage = () => {
    console.log("route", route)

    switch(route) {
      case 'page1':
        return  <Page1 onRouteChange={onRouteChange} />
      case 'page2':
        return  <Page2 onRouteChange={onRouteChange} />
      case 'page3':
        return  <Page3 onRouteChange={onRouteChange} />
      default:
        return <h2>Not Found</h2>
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
