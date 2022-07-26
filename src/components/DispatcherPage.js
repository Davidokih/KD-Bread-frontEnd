import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from 'react-redux';
import Inputs from './Inputs';

const DispatcherPage = () => {

    const [ Text, setText ] = useState("");

    const formSchema = yup.object().shape({
        verifiedToken: yup.string().required("This field cannot be empty")
    });

    // const {
    //     register,
    //     reset,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     resolver: yupResolver(formSchema),
    // });

    // const handleImage = (e) => {
    //     const file = e.target.files[ 0 ];
    //     const save = URL.createObjectURL(file);
    //     setImage(save);
    //     setAvatar(file);
    // };

    // const onSubmit = handleSubmit(async (value) => {
    //     const { userName, email, phone, location, quantity, totalPrice } = value;
    //     // const totalPrice = price;
    //     // const quantity = qty;
    //     const mainURL = "http://localhost:3554";
    //     const url = `${mainURL}/api/user/create`;
    //     console.log(value);

    //     await axios.post(url, { userName, email, phone, location, totalPrice, quantity }).then((res) => {
    //         setData(res.data.data);
    //         console.log("Error Data: ", res.data.data);
    //     }).catch((err) => {
    //         alert(err.message);
    //     });

    //     navigate("/confirm");
    // });
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

    const purchased = async () => {
        const mainURL = "http://localhost:3554";
        const url = `${mainURL}/api/user/create`;
    };
    return (
        <Container>
            <Wrapper>
                <Header>
                    <Name>Name</Name>
                    <Name>Contact</Name>
                    <Name>Quantity</Name>
                    <Name>Price</Name>
                    <Name>Location</Name>
                    {/* <Name>Category</Name> */ }
                    <Name>Progress</Name>
                </Header>
                { data.map((props) => (
                    <Form key={ props._id }>
                        <Card>
                            <Real>{ props.userName }</Real>
                            <Real>{ props.phone }</Real>
                            <Real>{ props.quantity }</Real>
                            <Real>{ props.totalPrice }</Real>
                            <Real>{ props.location }</Real>
                            {/* <Real>Category</Real> */ }
                            <Real>{ props.progress }</Real>
                        </Card>
                        { props.progress == "pending" ? (<Inputs props={ props } />) : null }
                    </Form>
                )) }

            </Wrapper>


        </Container>
    );
};

export default DispatcherPage;

const Input = styled.input``;
const Form = styled.div``;
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
    flex-direction: column;
`;