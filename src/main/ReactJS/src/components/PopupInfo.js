import './PopupInfo.css';
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function PopupInfo({ showModal, onHide, user, rowID, reqID, prjAdded, setAdd }) {

    //Set Constants
    const date = new Date();

    const [proj, setProj] = useState({
        project: "",
        dateapproved: '',
        timeapproved: '',
        daterequested: "",
        timerequested: "",
        description: "",
        license: "",
        status: "",
        url: ""
    });

    const [msg, setMsg] = useState();
    const [requester, setRequester] = useState({});
    const [showAlert, setAlert] = useState(false);
    const [submitProj, setSubmit] = useState(false);

    var displayButton;

    if (user.name !== requester.name && user.approver === true && proj.status === "Unapproved") {
        displayButton= true;
    } else {
        displayButton= false;
    }

    //Use effect to get requester and row data - only calls when rowID or reqID changes
    useEffect(() => {
        if (showModal) {

            fetch("http://localhost:8080/jpa/users/" + reqID, { method: "GET" })
                .then(res => res.json())
                .then(res => {
                    setRequester(res)
                });

            fetch("http://localhost:8080/opensources/" + rowID, { method: "GET" })
                .then(res => res.json())
                .then(res => {
                    setProj(res)
                });

        }
    }, [rowID, reqID])



    //User effect to update approval data, changes the prjadded state to re-render ProjectList.js
    useEffect(() => {
        if (submitProj) {

            fetch('http://localhost:8080/updtsources', {

                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(proj),
                credentials: 'same-origin',

            }).then((res) => {
                return res.json();

            }).then((res) => {
                setAdd(!prjAdded);
                setSubmit(false);
            }).catch((error) => {
                console.log(error);
                setAlert(true);
                setMsg("Was not able to update project");
                setSubmit(false);
            });
        }
    }, [submitProj]);

    //Other functions
    const setDate = (status) => {
        const currentDay = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
        const currentTime = date.toLocaleTimeString();

        setProj({
            ...proj,
            ...{ dateapproved: currentDay },
            ...{ timeapproved: currentTime },
            ...{ status: status }
        });
    }

    const handleApprove = (e) => {
        e.preventDefault();

        setDate("Approved");
        setSubmit(true);
    }

    const handleDeny = (e) => {
        e.preventDefault();

        setDate("Denied");
        setSubmit(true);
    }

    const handleDelete = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/removesource/" + proj.project_id, { method: "DELETE" })
            .then(res => {
                onHide();
                setAdd(!prjAdded);
            }).catch((error) => {
                console.log(error);
                showAlert(true);
                setMsg("Unable to delete Project");
            });
    }

    return (
        <div>
            <Modal
                show={showModal}
                onHide={onHide}
                size="lg"
                centered
            >
                
                <Modal.Header closeButton>
                    <Modal.Title>
                        {proj.project} - {requester.firstname} {requester.lastname}
                    </Modal.Title>
                </Modal.Header>

                <Alert show={showAlert} variant='danger' onClose={() => setAlert(false)} dismissible>
                    <Alert.Heading>{msg}</Alert.Heading>
                </Alert>

                <Modal.Body>
                    <Container>
                        <div className="bodyText">
                            <Row>
                                <Col> <b>Project Description:</b> </Col>
                            </Row>
                            <Row>
                                <Col> {proj.description}<br /> <br /> </Col>
                            </Row>

                            <Row>
                                <Col> <b>License: </b> {proj.license} </Col>

                                <Col> <b>URL: </b> {proj.url} </Col>
                            </Row>
                        </div>
                        <Row className="statusRow justify-content-md-end">
                            <Col>
                                <b>Status - {proj.status} {" "}
                                    {proj.status !== "Unapproved" ? proj.dateapproved : null}</b>
                            </Col>

                            <Col> <b>Requested - {proj.daterequested}</b> </Col>
                        </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Container>
                        <Row>
                            <Col xs={2}>
                                <Button
                                    className={displayButton ? "btnApp" : "invisible"}
                                    onClick={(handleApprove)}
                                >
                                    Approve
                                </Button>
                            </Col>
                            <Col xs={7}>
                                <Button
                                    className={displayButton ? "btnDeny" : "invisible"}
                                    onClick={(handleDeny)}
                                >
                                    Deny
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className={requester.name === user.name ? "btnDelete" : "invisible"}
                                    onClick={handleDelete}
                                >
                                    Delete Request
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>

        </div>
    )
}