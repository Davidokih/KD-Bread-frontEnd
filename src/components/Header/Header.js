import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo to='/'>KDBRead.js</Logo>

                <NavHold>
                    <Nav to='/cart'>
                        Cart
                    </Nav>
                    <Nav to='/post'>
                        Post
                    </Nav>
                    <Nav to='/admin'>
                        Admin
                    </Nav>
                    <Nav to='/dispatch'>
                        Dispatcher
                    </Nav>
                    <Nav to='/auth'>
                        Register
                    </Nav>
                </NavHold>
            </Wrapper>
        </Container>
    );
};

export default Header;

const Nav = styled(NavLink)`
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    color: black;
`;
const NavHold = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
`;
const Logo = styled(NavLink)`
    font-size: 20px;
    font-weight: 800;
    text-decoration: none;
    color: black;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
`;
const Container = styled.div`
    width: 100%;
    height: 70px;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
`;