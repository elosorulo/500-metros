import React from 'react';
import './App.css';
import Instalation from './Instalation';
import InitialPage from './pages/InitialPage';

const App = props => {

  const [hasStarted, setStarted] = React.useState(false);

  return (
    <div className="App">
        {hasStarted ? <Instalation/> : <InitialPage start={() => setStarted(true)}/>}
    </div>
  );
}

export default App;
