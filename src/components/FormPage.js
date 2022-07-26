import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from 'react-redux';
// import pix from "./babe.jpeg";

const FormPage = () => {
    const navigate = useNavigate();
    const [ image, setImage ] = useState('logo192.png');
    const [ Data, setData ] = useState([]);

    const qty = useSelector((state) => state.persistedReducer.qty);
    const price = useSelector((state) => state.persistedReducer.totalPrice);
    console.log(price);

    const formSchema = yup.object().shape({
        userName: yup.string().required("This field cannot be empty"),
        email: yup.string().email().required("This field cannot be empty"),
        phone: yup.number().required("This field cannot be empty"),
        location: yup.string().required("This field cannot be empty")
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    // const handleImage = (e) => {
    //     const file = e.target.files[ 0 ];
    //     const save = URL.createObjectURL(file);
    //     setImage(save);
    //     setAvatar(file);
    // };

    const onSubmit = handleSubmit(async (value) => {
        const { userName, email, phone, location } = value;
        const totalPrice = price;
        const quantity = qty;
        const mainURL = "http://localhost:3554";
        const url = `${mainURL}/api/user/create`;
        console.log(value);

        await axios.post(url, { userName, email, phone, location, totalPrice, quantity }).then((res) => {
            setData(res.data.data);
            console.log("Error Data: ", res.data.data);
        }).catch((err) => {
            alert(err.message);
        });

        navigate("/confirm");
    });

    return (
        <Container>
            <Wrapper>
                <Card>

                    <Form
                        onSubmit={ onSubmit }
                    >
                        <Holder>
                            <Label>User Name</Label>
                            <Input placeholder="userName" { ...register('userName') } />
                            {/* <Error>{ errors.message && errors?.message.userName }</Error> */ }
                        </Holder>
                        <Holder>
                            <Label>Email</Label>
                            <Input placeholder="email" { ...register('email') } />
                            {/* <Error>{ errors.message && errors?.message.email }</Error> */ }
                        </Holder>
                        <Holder>
                            <Label>Contact</Label>
                            <Input placeholder="Contact" type="number" { ...register('phone') } />
                            {/* <Error>{ errors.message && errors?.message.password }</Error> */ }
                        </Holder>
                        <Holder>
                            <Label>Location</Label>
                            <Input placeholder="Location" { ...register('location') } />
                            {/* <Error>{ errors.message && errors?.message.confirm }</Error> */ }
                        </Holder>
                        {/* <InputHold>
                            <Holder>
                                <Label>totalPrice</Label>
                                <Input placeholder="totalPrice" { ...register('totalPrice') } />
                                /* <Error>{ errors.message && errors?.message.confirm }</Error> 
                            </Holder>
                            <Holder>
                                <Label>quantity</Label>
                                <Input placeholder="quantity" { ...register('quantity') } />
                                {/* <Error>{ errors.message && errors?.message.confirm }</Error>
                            </Holder>
                        </InputHold> */}
                        <br />
                        <Button type="submit" bg="#004080">
                            Submit
                        </Button>
                        {/* 
                        <Div>
                            Already have an Account? <Span to="signin">Sign in Here</Span>
                        </Div> */}
                    </Form>
                </Card>
            </Wrapper>
        </Container>
    );
};

export default FormPage;

const Span = styled(Link)`
	margin-left: 5px;
	text-decoration: none;
	color: darkorange;
	cursor: pointer;
`;

const Div = styled.div`
	display: flex;
	margin-top: 10px;
`;

const Button = styled.button`
	width: 80%;
	margin-top: 5px;
	height: 40px;
	font-family: Poppins;
	font-size: 20px;
	text-transform: uppercase;
	color: white;
	font-weight: 300;
	outline: none;
	border: 0;
	background-color: ${({ bg }) => bg};

	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
`;

const Error = styled.div`
	color: red;
	font-weight: 500;
	font-size: 12px;
`;

const InputHold = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
`;
const Input = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 3px;
	padding-left: 5px;
	::placeholder {
		font-family: Poppins;
	}
	border: 1px solid silver;
	outline: none;
`;

const Label = styled.label`
	font-weight: 500;
`;

const Holder = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	align-items: flex-start;
	margin-top: 10px;
`;

const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 28px;
`;

const ImageInput = styled.input`
	display: none;
`;

const ImageLabel = styled.label`
	padding: 10px 20px;
	background-color: #004080;
	color: white;
	border-radius: 3px;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
`;

const ImageHolder = styled.div`
	width: 100%;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
	background-color: darkorange;
	margin-bottom: 20px;

	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const Card = styled.div`
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	width: 500px;
	min-height: 650px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	padding: 20px 0;
	flex-direction: column;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	justify-content: center;
	display: flex;
	align-items: center;
`;

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 70px);
	padding-top: 70px;
`;
