/* 
dependencies added in addition to standard create-react-app dependencies:
    -axios
    -react-redux
    -redux
    -redux-thunk
    -reactstrap
    -formik
    -yup
*/

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData, submitForm, deleteSmurf } from "../actions";

import "./App.css";

import Smurfs from "./Smurfs.js";
import Form from "./Form.js";

const App = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZALJsdYu9fxsonyfaxrhfBY-dF88iebbtTG0riYA14XfKHJlubA&s' alt='smurfs' />
      {props.isFetching && <p>LOADING</p>}
      <Smurfs deleteSmurf={props.deleteSmurf} data={props.data} />
      <Form submitForm={props.submitForm} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchData, submitForm, deleteSmurf })(
  App
);