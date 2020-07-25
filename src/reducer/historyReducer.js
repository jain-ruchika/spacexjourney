import { FETCH_HISTORY_REQUEST, FETCH_HISTORY_SUCCESS, FETCH_HISTORY_ERROR } from '../actions/historyActions';

const initialState = {
    loading: true,
    data: [],
    error: null,
    text:'',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HISTORY_REQUEST:
            return {
                ...state, loading: true, data: [], error: null, text: 'fetch history request'
            };
        case FETCH_HISTORY_SUCCESS:
            return {
                ...state, loading: false, data: action.payload, error: null, text: 'fetch history success',
            };
        case FETCH_HISTORY_ERROR: 
            return{
                ...state,loading: false, data: [], error:action.payload, text: 'fetch error',
            }
        default:
            return state;

    }
}