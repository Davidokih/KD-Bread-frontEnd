import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Confirm = () => {
    return (
        <Container>
            <Wrapper>
                <h1>Check your email for your token </h1>

                {/* <Link to="/:id/:code/verifyDispatcha"><button>Dispatcha</button></Link>
                <Link to="/:id/:code/verifyAdmin"><button>Admin</button></Link> */}
            </Wrapper>
        </Container>
    );
};

export default Confirm;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 400px;
    height: 400px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);

    button{
        width: 100px;
        height: 30px;
        background-color: blue;
        color: #fff;

        border: 0;
        outline: none;
        border-radius: 10px;
    }
`;