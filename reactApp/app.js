import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Components/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Table />
  </MuiThemeProvider>
);


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
