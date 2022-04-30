import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

const FooterStyle = styled.div`
    background-color: #e4e4e4;
    border-top: 1.25em solid #63a103;
    height: 5em;
    padding: 1em;
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