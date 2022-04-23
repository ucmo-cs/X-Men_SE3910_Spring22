import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";

export default function PopupAdd(props) {
    const [show, setShow] = useState(false);

    //Get and format today's date
    const date = new Date();
    const currentDay = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

    //Functions
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <div>
            <Button variant='success' onClick={handleOpen}>
                +
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
                <Form>
                    <Modal.Body>
                        <Container>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Project Name</Form.Label>
                                    <Col>
                                        <Form.Control type="textarea" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label>Project Decription</Form.Label>
                                    <Form.Control type="textarea" rows={3} />
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">License</Form.Label>
                                    <Col>
                                        <Form.Control type="textarea"/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">URL</Form.Label>
                                    <Col>
                                        <Form.Control type="textarea"/>
                                    </Col>
                                </Form.Group>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Container>
                            <Row>
                                <Col>
                                    <Button variant='success' type="submit" >
                                        Submit
                                    </Button>
                                </Col>
                                <Col lg='8' />
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