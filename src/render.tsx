import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './Redux/State.js'

export let renderEntireTree = function (State: any) {
    ReactDOM.render(
        <App state={State} addPost={addPost}/>,
        document.getElementById('root')
    )
}