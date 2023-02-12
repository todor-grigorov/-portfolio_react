import { useState } from 'react';
import './App.scss';
import { GlobalContext } from './context/GlobalContext';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import AppLanding from './container/AppLanding';

const App = () => {
  const [appLoading, setAppLoading] = useState(true);
  return (
    <GlobalContext.Provider value={{ appLoading, setAppLoading }}>
      <div className="app">
        {appLoading ? <LoadingScreen /> : null}
        <AppLanding isLoading={appLoading} />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
