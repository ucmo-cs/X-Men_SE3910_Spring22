import './ProjectList.css';
import Footer from './Footer.js';
import Header from './Header.js'
import PopupAdd from './PopupAdd.js';
import PopupInfo from './PopupInfo.js';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


function ProjectList() {

    const location = useLocation();
    const { name } = location.state;

    const [prjAdded, setAdd] = useState(true);
    const [projects, setProjects] = useState([]);
    const [reqID, setReqID] = useState();
    const [rowKey, setRowKey] = useState();
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({});

    //Fetch projects
    useEffect(() => {
        fetch("http://localhost:8080/opensources", { method: "GET" })
            .then(res => res.json())
            .then(res => {
                setProjects(res)
            });
    }, [prjAdded])

    //Fetch logged in user
    useEffect(() => {
        fetch("http://localhost:8080/jpa/users/" + name, { method: "GET" })
            .then(res => res.json())
            .then(res => {
                setUser(res)
            });
    }, [name])

    function handleRowClick(e) {

        const id = e.currentTarget.getAttribute('rowid');

        const reqId = e.currentTarget.getAttribute('reqid');
        setShowModal(!showModal);
        setRowKey(id);

        setReqID(reqId);
    }

    return (
        <Container fluid>
            <Row>
                <Header isLoggedIn={true} isApprover={user.approver} user={user} />
            </Row>

            <Row className="reqButton">
                <Col>
                    <PopupAdd user={user} prjAdded={prjAdded} setAdd={setAdd} />
                </Col>
            </Row>

            <Row>

                <Container fluid className="tableContainer">

                    <Table striped bordered hover responsive>
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
                                <tr key={prj.project_id} rowid={prj.project_id} reqid={prj.requester.name} onClick={handleRowClick}>
                                    <td>{prj.project}</td>
                                    <td>{prj.requester.firstname} {prj.requester.lastname}</td>
                                    <td>{prj.license}</td>
                                    <td>{prj.daterequested}</td>
                                    <td>{prj.status}</td>
                                </tr>
                            ).reverse()}

                        </tbody>
                    </Table>
                </Container>
            </Row>
            <Row>

                <Footer />
            </Row>

            <PopupInfo
                showModal={showModal}
                onHide={() => setShowModal(!showModal)}
                user={user}
                rowID={rowKey}
                reqID={reqID}
                prjAdded={prjAdded}
                setAdd={setAdd}
            />
        </Container>
    );
};
export default ProjectList;