import axios from "axios";


export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => dispatch({ 
        type: FETCH_SUCCESS,
        payload: res.data 
    }))
    .catch((err) => dispatch({ 
        type: FETCH_FAIL, 
        payload: err 
    }));
};

export const submitForm = (data) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .post("http://localhost:3333/smurfs", data)
    .then((res) => dispatch({ 
        type: FETCH_SUCCESS, 
        payload: res.data 
    }))
    .catch((err) => dispatch({ 
        type: FETCH_FAIL, 
        payload: err 
    }));
};

export const deleteSmurf = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then((res) => dispatch({ 
        type: FETCH_SUCCESS, 
        payload: res.data 
    }))
    .catch((err) => dispatch({ 
        type: FETCH_FAIL, 
        payload: err 
    }));
};
