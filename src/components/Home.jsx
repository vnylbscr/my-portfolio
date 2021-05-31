import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import myBackground from '../assets/background.jpg';
import TextTransition, { presets } from "react-text-transition";
import Typed from "react-typed";
import axios from 'axios';
const texts = [
    "Infinite skills create miracles.",
    "No such things as halfway crooks.",
    "This is Mert.",
    "Hello World",
    "The two most powerful warriors are patience and time."
];
const names = ["Friend",
    "Developer",
    "Student",
    "Musician",
    "Kubi"
];
const Title = styled.h1({
    fontFamily: 'KoHo',
    fontSize: '100px',
    overflowY: 'hidden',
    color: 'azure',
    textAlign: 'center',
});
const Subtitle = styled.h1({
    fontFamily: 'KoHo',
    fontSize: '50px',
    overflowY: 'hidden',
    color: 'azure',
    paddingTop: 20,
    textAlign: 'center',
});

export const Home = () => {
    const [index, setIndex] = useState(0);
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("/api")
            .then((response) => {
                setData(response.data.message);
            })
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            4000
        );
        console.log(data);
        return () => {
            clearTimeout(intervalId);
        }
    }, []);
    return (
        <Container style={{
            backgroundImage: `url(${myBackground})`,
            backgroundSize: 'cover',
            height: '100vh',
        }}
            className="d-flex flex-column justify-content-center align-items-center overflow-hidden" fluid>
            <Title>Mert Genç</Title>
            <Subtitle>
                <Typed strings={names}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </Subtitle>
            <Subtitle>
                <TextTransition
                    text={texts[index % texts.length]}
                    springConfig={presets.slow}
                />
            </Subtitle>
        </Container>
    )
}
export default Home;
