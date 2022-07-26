import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const AdminPage = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [ data, setData ] = useState([]);

    const getData = async () => {

        await axios.get("http://localhost:3554/api/user").then((res) => {
            setData(res.data.data);
        });
    };
    console.log(data);

    useEffect(() => {
        getData();
    }, []);
    return (
        <Container>
            <Wrapper>
                <Header>
                    <Name>Name</Name>
                    <Name>Contact</Name>
                    <Name>Quantity</Name>
                    <Name>Price</Name>
                    <Name>Location</Name>
                    <Name>Category</Name>
                    <Name>Progress</Name>
                </Header>
                { data?.map((props) => (
                    <Card key={ props._id }>
                        <Real>{ props.userName }</Real>
                        <Real>{ props.phone }</Real>
                        <Real>{ props.quantity }</Real>
                        <Real>{ props.totalPrice }</Real>
                        <Real>{ props.location }</Real>
                        <Real>{ props.description }</Real>
                        <Real>{ props.progress }</Real>
                    </Card>
                )) }
            </Wrapper>
        </Container>
    );
};

export default AdminPage;

const Real = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 13px;
    /* color: white; */
`;
const Name = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 14px;
    color: white;
`;
const Card = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: black; */
    border: 1px solid gray;
`;
const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    border: 1px solid gray;
`;
const Wrapper = styled.div`
    width: 95%;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* padding: 0 10px; */
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;