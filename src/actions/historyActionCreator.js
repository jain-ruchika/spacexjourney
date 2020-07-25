import {FETCH_HISTORY_REQUEST, FETCH_HISTORY_SUCCESS, FETCH_HISTORY_ERROR} from './historyActions';
import axios from 'axios'

export const fetchHistoryRequest = () => {
    return {
        type: FETCH_HISTORY_REQUEST
    }
}

export const fetchHistorySuccess = (data) => {
    return {
        type : FETCH_HISTORY_SUCCESS,
        payload: data,
    }
}

export const fetchHistoryError = (error) => {
    return {
        type:  FETCH_HISTORY_ERROR,
        payload: error,
    }
}

export const fetchHistory = () => {
    return async (dispatch) => {
        dispatch(fetchHistoryRequest());
        axios.get('https:api.spacexdata.com/v3/history')
        .then(res => {
            dispatch(fetchHistorySuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchHistoryError(err.message));
        })
    }
}