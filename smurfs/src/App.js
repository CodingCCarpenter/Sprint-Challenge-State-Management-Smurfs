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
import Smurfs from './components/SmurfsData';
import NewSmurfForm from './components/SmurfsData';
//styling
import "./App.css";

//API running on http://localhost:3333/smurfs
//Initial data returned by API- [{"name":"Brainey","age":200,"height":"5cm","id":0}]

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <div className='App'>
            <h1>Smurf Registration</h1>
            <quote>
                <p>All subjects of Far Far Away are hereby notified of the Smurf Registration Act, enacted by the great Lord Farquad. Below is a complete listing of all registered Smurfs. If you are an unregistered Smurf, or encounter one, please use the form below.</p>
                <p>Lord Farquad</p>
            </quote>
            <SmurfsData />
            <NewSmurfForm />
        </div>
    );
}

export default App;
