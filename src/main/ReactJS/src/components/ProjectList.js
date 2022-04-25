import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import Table from 'react-bootstrap/Table';

function ProjectList() {

    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/opensources", { method: "GET" })
            .then(res => res.json())
            .then(res => {
                setProjects(res)
            });
    }, [])

    console.log("projects " + projects);


    return (
        <div>
            <Header isLoggedIn={true}/>
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
                    {projects.map(prj =>

                        <tr>
                            <th>{prj.project}</th>
                            <th>{prj.requester.name}</th>
                            <th>{prj.license}</th>
                            <th>{prj.daterequested}</th>
                            <th>{prj.dateapproved}</th>
                        </tr>


                    )}

                </tbody>
            </Table>
        </div>
    );
};
export default ProjectList;