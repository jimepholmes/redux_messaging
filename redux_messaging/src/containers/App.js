import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './App.css';
import store from '../store';
import _ from 'lodash';

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(_.values(contacts)[0])} />
      <Main user={user} activeUserId = {activeUserId}/>
    </div>
  );
}

export default App;
