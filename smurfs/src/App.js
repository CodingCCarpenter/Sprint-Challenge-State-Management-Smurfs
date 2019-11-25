/* 
dependencies added in addition to standard create-react-app dependencies:
    -axios
    -react-redux
    -redux
    -redux-thunk
*/

//React imports
import React from "react";
import ReactDom from 'react-dom';
//Redux imports
import { createStore, applyMiddleware } from 'react-redux';
//middleware
import thunk from 'redux-thunk';
//reducer
import reducer from './reducers';
//components
import Smurfs from './components/Smurfs';
import NewSmurfForm from './components/Smurfs';
//styling
import "./App.css";

//API running on http://localhost:3333/smurfs
//Initial data returned by API- [{"name":"Brainey","age":200,"height":"5cm","id":0}]

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <div className='App'>
            <Smurfs />
            <NewSmurfForm />
        </div>
    );
}

export default App;
