import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase from './Firebase.js';

// Firebase Variables
const firebase = new Firebase();
const auth = firebase.auth;
const db = firebase.db;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
 );

export {db, auth};

