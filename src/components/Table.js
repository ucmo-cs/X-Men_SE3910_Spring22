import React from 'react';
import Table from 'react-bootstrap/Table';
const TableConst = () => {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Requester</th>
                <th>License</th>
                <th>Date Requested</th>
                <th>Approval Status</th>
                </tr>
            </thead>
        <tbody>
        
        </tbody>
        </Table>
    );
};
export default TableConst;