import {
    SMURFDATA_LOAD_START,
    SMURFDATA_LOAD_SUCCESS,
    SMURFDATA_LOAD_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    smurf: { 
        name: 'Brainey', 
        age: 200, 
        height: '5cm', 
        id: 0 
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SMURFDATA_LOAD_START:
            return{
                ...state,
                isLoading: true
            };
        case SMURFDATA_LOAD_SUCCESS:
            return{
                ...state,
                isLoading: false,
                smurf: { ...state.monster, name: action.payload, age: action.payload, id: action.payload}
            };
        default:
            return state;
    }
}

export default reducer;