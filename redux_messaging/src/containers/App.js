import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './App.css';
import store from '../store';
import _ from 'lodash';

const App = () => {
  const { contacts } = store.getState();
  console.log(contacts);

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
