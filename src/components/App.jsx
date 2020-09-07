import React from 'react';
import './App.css';
import Documentary from './Documentary';
import InitialPage from './pages/InitialPage';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../style/muiTheme';

const App = () => {

  const [hasStarted, setStarted] = React.useState(false);

  return (
      <div className="App">
        <MuiThemeProvider theme={muiTheme}>
          {
            hasStarted ?
              <Documentary/>
            :
              <InitialPage start={() => {setStarted(true)}}/>
          }
        </MuiThemeProvider>
      </div>
  );
}

export default App;
