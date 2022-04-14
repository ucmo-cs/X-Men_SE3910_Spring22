import './PopupInfo.css';
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

export default function PopupInfo(props) {
    const [show, setShow] = useState(false);

    /*
    Use below when passing data through table component
    const [projectData, setProjectData] = useState(props.projectData);
    const isApprover = props.isApprover;
    */

    //Temp direct implementation until API implemented
    const [projectData, setProjectData] = useState({
        appDate: 'Approved Date',
        desc: 'Temporary Description',
        license: 'License',
        projName: 'Project Name',
        reqDate: 'Request Date',
        reqName: 'Requester Name',
        status: 'Unapproved',
        url: 'url.com'
    });
    const [isApprover] = useState(true);

    //Get and format today's date
    const date = new Date();
    const currentDay = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

    //Functions
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const handleApprove = () => {
        setProjectData({
            ...projectData,
            ...{ appDate: currentDay },
            ...{ status: "Approved" }
        });
    }

    const handleDeny = () => {

        setProjectData({
            ...projectData,
            ...{ appDate: currentDay },
            ...{ status: "Denied" }
        });
    }

    return (
        <div>
            <Button onClick={handleOpen}>
                Popup
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {projectData.projName} - {projectData.reqName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <div className="bodyText">
                            <Row>
                                <Col> <b>Project Description:</b> </Col>
                            </Row>
                            <Row>
                                <Col> {projectData.desc} <br /> <br /> </Col>
                            </Row>

                            <Row>
                                <Col> <b>License: </b> {projectData.license} </Col>

                                <Col> <b>URL: </b> {projectData.url} </Col>
                            </Row>
                        </div>
                        <Row className="statusRow justify-content-md-end">
                            <Col> 
                                <b>Status - {projectData.status} {" "}
                                {projectData.status !== "Unapproved" ? projectData.appDate : null}</b> 
                            </Col>

                            <Col> <b>Requested - {projectData.reqDate}</b> </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <Row>
                            <Col xs={2}>
                                <Button
                                    className={isApprover && projectData.status === "Unapproved" ? "btnApp" : "invisible"}
                                    onClick={(handleApprove)}
                                >
                                    Approve
                                </Button>
                            </Col>
                            <Col xs={7}>
                                <Button
                                    className={isApprover && projectData.status === "Unapproved" ? "btnDeny" : "invisible"}
                                    onClick={(handleDeny)}
                                >
                                    Deny
                                </Button>
                            </Col>
                            <Col>
                                <Button className="btnCancel" onClick={(handleClose)}>
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>

        </div>
    )
}