import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
export default function Payload() {

    const [payload, setsPayload] = useState([]);

    useEffect(() => {
        axios.get('/v3/payloads').then(value => {
            setsPayload(value.data);
        })
    }, [])
    const columns = ["payload_id", "nationality", "manufacturer", "payload_type", "orbit"];
    if (!payload) {
        return null;
    }
    return (
        <MUIDataTable
            data={payload}
            columns={columns}
        />
    )
}
