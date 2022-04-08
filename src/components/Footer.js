import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const FooterStyle = styled.div`
    background-color: #e4e4e4;
    border-top: 1.25em solid #63a103;
    padding: 1.5em;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterStyle>
            <Container>
                <Row>
                    <small className='text-center'>Project Created by Spring 2022 X-Men team for <a href='https://www.commercebank.com/'>Commerce Bank</a></small>
                </Row>
            </Container>
        </FooterStyle>
    );
};

export default Footer;