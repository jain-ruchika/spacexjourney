import React, { useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import {useDispatch, useSelector} from 'react-redux';
import {fetchHistory} from '../actions/historyActionCreator';
export default function History() {

    const dispatch = useDispatch();

    const getHistory = () => {
      dispatch(fetchHistory());
    }
    useEffect(() => {
        getHistory();
    }, []);
  
    const historys = useSelector(state => state.historyReducer.data);
    const columns = ["title", "event_date_utc", "flight_number", "details"];
    if(!historys) {
        return null;
    }

    return (
        <MUIDataTable
            data={historys}
            columns={columns}
        />
    )
}
