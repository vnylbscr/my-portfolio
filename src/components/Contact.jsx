import React, { useState } from 'react'
import { Container, Form, Col, Button, Alert, Spinner, Row, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../validation/form';
import axios from 'axios';
const Title = styled.h1`
    font-family:'sans-serif';
    color:blueviolet;
    &:hover,
    &:focus {
        color:purple;
    }
`;
export const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(formSchema)
    });
    const onSubmit = async data => {
        try {
            setLoading(true);
            const res = await axios.post("https://mert-blog-server.herokuapp.com/api", data);
            if (res.status === 200) {
                setResponseMessage(res.data);
                setLoading(false);
                reset();
            } else {
                setLoading(false);
                setResponseMessage(res.data);
            }
        } catch (error) {
            setLoading(false);
        }
    };
    return (
        <Container fluid
            className="contact-container"
            className="bg-dark"
        >
            <Container fluid className="d-flex justify-content-center align-items-center">
                <Row className="w-100 contact">
                    <Col xs={6}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Label style={{ color: "white" }}>Your name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    {...register("username")}
                                />
                                <p className="text-danger">{errors.username?.message}</p>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Subject"
                                    {...register("subject")}
                                />
                                <p className="text-danger">{errors.subject?.message}</p>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{ color: "white" }}>Email address</Form.Label>
                                <Form.Control
                                    placeholder="Enter your e-mail address"
                                    {...register("email")}
                                />
                                <p className="text-danger">{errors.email?.message}</p>
                                <Form.Text className="text-muted" style={{ color: "white" }}>
                                    I'll never share your e-mail with anyone else.
                            </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ color: "white" }}>Your message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3} placeholder="Enter your message"
                                    {...register("message")}
                                />
                                <p className="text-danger">{errors.message?.message}</p>

                            </Form.Group>
                            <Button type="submit" variant="secondary" className="w-100">
                                Submit
                        </Button>
                        </Form>
                        {responseMessage && (
                            <Alert variant="success"
                                className="mt-3"
                                show={responseMessage}
                                onClose={() => setResponseMessage(null)}
                                dismissible>
                                {responseMessage.message}
                            </Alert>
                        )
                        }
                        <Col className="w-100 d-flex justify-content-center align items-center">
                            {loading &&
                                (<Spinner animation="border" className="d-flex mt-5" />)
                            }
                        </Col>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image src="https://preview.colorlib.com/theme/bootstrap/contact-form-03/images/ximg.jpg.pagespeed.ic.XWkNClO4gV.webp"
                            width="500"
                            height="600"
                            alt="Responsive image"
                            className="rounded img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Contact;
