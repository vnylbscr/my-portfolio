import React from 'react'
import { Container, Figure, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Subtitle = styled.h1({
    fontFamily: 'KoHo',
    fontSize: '30px',
    overflowY: 'hidden',
    color: 'azure',
    paddingTop: 20,
    textAlign: 'center',
})

const NavTitle = styled(Subtitle)({
    fontSize: '20px',
    textAlign: 'center',
    

})
export const NotFoundPage = () => {
    return (
        <Container className="d-flex bg-dark justify-content-center" fluid>
            <Figure>
                <Figure.Image src="https://www.freeiconspng.com/uploads/rectangular-black-face-crossed-and-the-error-image-10.png"
                    width={200}
                    height={200}
                    style={{ display: 'flex', justifyContent: 'center', alignitems: 'center' }}
                />
                <Figure.Caption>
                    <Subtitle>
                        Aradığın sayfa bu sunucuda bulunamadı. Hatalı bir şey yapmış olabilir misin?
                    </Subtitle>
                </Figure.Caption>
                <NavLink to="/">
                    <NavTitle>
                        Anasayfaya Dön
                    </NavTitle>
                </NavLink>
            </Figure>
        </Container>
    )
}
export default NotFoundPage;
