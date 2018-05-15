import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  BasicLayout from './layout/basicLayout';
import  ButtonAndIcon from './button/buttonAndIcon';
import  RadioApp from './form/radio';
import  CheckboxApp from './form/checkbox';
import  BasicTable from './table/basicTable';

import { i18n } from 'element-react';
import  locale from 'element-react/src/locale/lang/en';

i18n.use(locale);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Test</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <BasicTable/>
      </div>
    );
  }
}

export default App;
