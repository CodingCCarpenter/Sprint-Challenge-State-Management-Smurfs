import axios from 'axios';

export const SMURFDATA_LOAD_START = 'SMURFDATA_LOAD_START';
export const SMURFDATA_LOAD_SUCCESS = 'SMURFDATA_LOAD_SUCCESS';
export const SMURFDATA_LOAD_FAILURE = 'SMURFDATA_LOAD_FAILURE';

export const getSmurfData = () => {
    //transition to LOADING state by isLoading = true
    //update monster data is successful 
    //update error state if failure

    console.log('cc: actions/getSmurfData: dispacth: ', dispatch);
    dispatch({ type: SMURFDATA_LOAD_START });

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => 
            dispatch({
                type: SMURFDATA_LOAD_SUCCESS,
                payload: res.data.value
            })
        )
        .catch(err => {
            console.log(err);
            dispatch({
                type: SMURFDATA_LOAD_FAILURE,
                payload: 'error loading data'
            });
        });
};