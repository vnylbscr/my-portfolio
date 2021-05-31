import { useEffect, useState } from "react";
import { Container, Image, Col, Row, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import sanityClient from "../sanity-client/client";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}
// Title
const Title = styled.p`
    font-family: "Roboto Mono", "cursive";
    font-size: 18px;
    /* color: rgb(73, 194, 216); */
    font-weight: bold;
    color:#beb7b7;
    word-wrap:break-word;
    line-height:2em;
    box-sizing:border-box;
    white-space:normal !important;
    text-decoration: none;
    `
export const About = () => {
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        let isMounted = false;
        if (!isMounted) {
            sanityClient.fetch(`
                *[_type=="author"]{
                    name,
                    "bio":bio[0].children[0].text,
                    "authorImage":image.asset->url
                }
            `)
                .then((data) => {
                    console.log(data[0]);
                    setAuthor(data[0]);
                })
                .catch(error => console.log(error))
        }
        return () => {
            isMounted = true;
        }
    }, [])
    if (!author) {
        return <Spinner animation="border" role="status"></Spinner>
    }
    return (
        <Container className="bg-dark" fluid>
            <Container fluid className="d-flex justify-content-center align-items-center">
                <Row className="w-100 contact">
                    <Col xs={6}>
                        <Title>
                            {author.bio}
                            Interested in working with me? <Link to="/contact" style={{ textDecoration: 'none' }}>
                                Get in touch
                            </Link> and i'd be happy to talk to you.
                        </Title>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image src={urlFor(author.authorImage).width(500).height(600).url()}
                            alt="Responsive image"
                            className="rounded img-fluid about"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default About;
