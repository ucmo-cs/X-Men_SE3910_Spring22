import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const FooterStyle = styled.div`
    background-color: #e4e4e4;
    border-top: 20px solid #63a103;
    text-align: center;
    padding: 20px;
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