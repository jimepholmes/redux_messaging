import React from 'react';
import store from '../store';
import Header from '../components/Header';
import Chats from './Chats'; 
import MessageInput from '../containers/MessageInput';
import './ChatWindow.css';
import _ from 'lodash';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  //const activeUser = state.contacts[activeUserId];
  //const activeUser = _.values(_.values(state.contacts)[0][activeUserId]);
  const activeUser = _.values(state.contacts)[0][activeUserId];
  const messages = state.messages[activeUserId];
  const { typing } = state;

  return (
      <div className="ChatWindow">
        <Header user={activeUser} />
        <Chats messages={_.values(messages)} />
        <MessageInput value={typing} />
      </div>
    );
  };

export default ChatWindow;