import React from 'react'
import { Container, Col } from 'react-bootstrap'
import styled from 'styled-components';
const Subtitle = styled.h1({
    fontFamily: 'KoHo',
    fontSize: '20px',
    overflowY: 'hidden',
    color: 'azure',
    paddingTop: 5,
    textAlign: 'center',
})
export const Footer = () => {
    return (
        <Container className="d-flex justify-content-end align-items-center h-100" fluid
            style={{
                backgroundColor: "#0a1931"
            }}
        >
            <Col>
                <Subtitle>
                    2021 ©
                    <span className="love m-2">♥</span>
                    <span style={{ color: "#1eae98", fontWeight: "bold" }}>Mert Genç</span>
                </Subtitle>
            </Col>
        </Container>
    )
}
export default Footer;