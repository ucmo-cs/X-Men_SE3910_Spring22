import "./PopupAdd.css";
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function PopupAdd({user, prjAdded, setAdd}) {

    const [show, setShow] = useState(false);
    const [showAlert, setAlert] = useState(false);
    const [showSuccess, setSuccess] = useState(false);
    const [submitProj, setSubmit] = useState(false);


    //Get and format today's date
    const date = new Date();

    const [proj, setProj] = useState({
        project: "",
        dateapproved: null,
        timeapproved: null,
        daterequested: "",
        timerequested: "",
        description: "",
        license: "",
        status: "",
        url: ""
    });

    //Functions
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    useEffect(() => {
        if (submitProj) {

            fetch('http://localhost:8080/opensource/' + user.name, {
                
                method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(proj),
            credentials: 'same-origin',

        }).then((res) => {
            return res.json();

        }).then((res) => {
            handleClose();
            setAdd(!prjAdded);
            setSubmit(false);
            setSuccess(true);
        }).catch((error) => {
            console.log(error);
            setAlert(true);
            setSubmit(false);
        });
     }
    }, [submitProj]);
    
    const handleSubmit = (e) => {

        e.preventDefault();

        const currentDay = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
        const currentTime = date.toLocaleTimeString();

        setProj({
            ...proj,
            daterequested: currentDay,
            timerequested: currentTime,
            status: "Unapproved"
        });

        setSubmit(true);
    }

    const changeValue = (e) => {
        setProj({
            ...proj, [e.target.name]: e.target.value
        });

    }

    return (
        <div>
            <Alert show={showSuccess} variant='success' onClose={() => setSuccess(false)} dismissible>
                <Alert.Heading>Project Added Succesfully</Alert.Heading>
            </Alert>

            <Button variant='success' className="reqButtons" onClick={handleOpen}>
                Create Request
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Submit A New Project
                    </Modal.Title>
                </Modal.Header>

                <Alert show={showAlert} variant='danger' onClose={() => setAlert(false)} dismissible>
                    <Alert.Heading>Project wasn't able to be added</Alert.Heading>
                </Alert>

                <Form>
                    <Modal.Body>
                        <Container>
                            <Form.Group as={Row} className="formRow">
                                <Form.Label column sm="2">Project Name</Form.Label>
                                <Col>
                                    <Form.Control
                                        autoFocus
                                        type="textarea"
                                        name="project"
                                        onChange={changeValue}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="formRow">
                                <Form.Label>Project Decription</Form.Label>
                                <Form.Control
                                 type="textarea" 
                                 name="description"
                                 rows={3} 
                                 onChange={changeValue}
                                 />
                            </Form.Group>

                            <Form.Group as={Row} className="formRow">
                                <Form.Label column sm="2">License</Form.Label>
                                <Col>
                                    <Form.Control 
                                    type="textarea"
                                    name="license"
                                    onChange={changeValue} 
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="formRow">
                                <Form.Label column sm="2">URL</Form.Label>
                                <Col>
                                    <Form.Control
                                     type="url" 
                                     name="url"
                                     onChange={changeValue}
                                    />
                                </Col>
                            </Form.Group>
                        </Container>
                    </Modal.Body>

                    <Modal.Footer>
                        <Container>
                            <Row>
                                <Col>
                                    <Button variant='success' type="submit" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </Col>
                                <Col lg='6' />
                                <Col>
                                    <Button className="btnCancel" onClick={(handleClose)}>
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Footer>
                    
                </Form>
            </Modal>

        </div>
    )
}