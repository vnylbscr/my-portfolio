import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import { NavLink, Link } from 'react-router-dom';
import Headroom from "react-headroom";


const HeaderTitle = styled.h1`
    font-family: 'KoHo';
    font-size:40px;
    color:#fff;
    font-weight:200;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    -webkit-transition:all ease-in-out .5s;
    transition:all ease-in-out .5s;
    display: inline-block;
    &:hover{
        color:rgb(73, 194, 216);
    }
`

const HeaderSubtitle = styled.h3`
    font-family: 'KoHo';
    font-size:30px;
    color:#fff;
    font-weight:200;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    -webkit-transition:all ease-in-out .5s;
    transition:all ease-in-out .5s;
    display: inline-block;
    &:hover{
        color:rgb(73, 194, 216);
        cursor:pointer;
        border-color:rgb(73, 194, 216);
    }
`
const styles = {
    title: {
        fontFamily: 'KoHo',
        color: '#fff',
        fontWeight: '200',
        fontSize: 30,
        paddingLeft: 30,
        textDecoration:'none'
    }
}
const Header = () => {
    return (
        <Headroom disable>
            <Navbar expand="sm" style={{ backgroundColor: "#282a39" }}>
                <Navbar.Brand className="justify-content-md-end">
                    <NavLink to="/">
                        <HeaderTitle>
                            Mert's Blog
                        </HeaderTitle>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand className="mr-auto">
                        <NavLink to="/works" activeStyle={{
                            color: '#39bdcc',
                            fontWeight: 'bold'
                        }} style={styles.title}
                        >
                            <HeaderSubtitle>
                                Blog
                            </HeaderSubtitle>
                        </NavLink>
                        <NavLink to="/about" activeStyle={{
                            color: '#39bdcc',
                            fontWeight: 'bold'
                        }} style={styles.title}
                        >
                            <HeaderSubtitle>
                                About Me
                            </HeaderSubtitle>
                        </NavLink>
                        <NavLink to="/contact" activeStyle={{
                            color: '#39bdcc',
                            fontWeight: 'bold'
                        }} style={styles.title}
                        >
                            <HeaderSubtitle>
                                Contact Me
                            </HeaderSubtitle>
                    </NavLink>
                    </Navbar.Brand>
                </Navbar.Collapse>
                <Navbar.Brand className='mx-4'>
                    <SocialIcon url="https://instagram.com/gencmert_" className='social-icon' />
                    <SocialIcon url="https://github.com/vnylbscr" className='social-icon'
                        fgColor="white"
                    />
                    <SocialIcon url="https://twitter.com/accurcy" className='social-icon' />
                    <SocialIcon url="https://open.spotify.com/user/vnylbscr" className='social-icon' />
                    <SocialIcon url="https://www.linkedin.com/in/mert-gen%C3%A7-17b93212a/" className='social-icon' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
        </Headroom>
    )
}
export default Header;
