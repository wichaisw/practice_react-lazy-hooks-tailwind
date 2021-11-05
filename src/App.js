import { useState, lazy, Suspense } from 'react';
import './App.css';
import './index.css';
import Page1 from './domain/Page1';
import MainFallBack from './components/MainFallBack';

function App() {
  const [ route, setRoute ] = useState('page1');

  const onRouteChange = (route) => {
    setRoute(route);
  }

  const renderPage = () => {
    switch(route) {
      case 'page1':
        return <Page1 onRouteChange={onRouteChange} />
      case 'page2':
        const Page2 = lazy(() => import('./domain/Page2'));
        return (
          <Suspense fallback={<MainFallBack />}>
            <Page2 onRouteChange={onRouteChange} />
          </Suspense>
        )
      case 'page3':
        const Page3 = lazy(() => import('./domain/Page3'));
        return (
          <Suspense fallback={<MainFallBack />}>
            <Page3 onRouteChange={onRouteChange} />
          </Suspense>
        )
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
