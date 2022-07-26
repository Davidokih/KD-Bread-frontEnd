import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Global/GlobalState';
import { Link, useNavigate } from "react-router-dom";

const Card = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ data, setData ] = useState([]);

    const getData = async () => {

        await axios.get("http://localhost:3554/api/post").then((res) => {
            setData(res.data.data);
        });
    };
    console.log(data);

    useEffect(() => {
        getData();
    }, []);
    return (
        <Container>
            { data?.map((props) => (
                <Wrapper key={ props._id }>
                    <ImageHold>
                        <Image src={ props.avatar } />
                    </ImageHold>

                    <Title>{ props.title }</Title>
                    <Description>
                        { props.description }
                    </Description>
                    <Price>{ props.price }</Price>

                    <Hold>
                        <Cart onClick={ () => {
                            dispatch(addToCart(props));
                            navigate('/cart');

                        } }>
                            Add to Cart
                        </Cart>
                        <Word>V</Word>
                    </Hold>
                </Wrapper>
            )) }
        </Container>
    );
};

export default Card;

const Description = styled.div``;
const Word = styled.div`
    width: 40px;
   height: 40px;
    background-color: #50d716;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    cursor: pointer;
`;

const Cart = styled.button`
height: 40px;
    width: 100px;
    /* background-color: lightgray; */
    border: 1px solid gray;
    border: 0;
    outline: none;
    background-color: #50d716;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    font-weight: 700;
`;
const Hold = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Price = styled.div`
    font-weight: 700;
    color: orange;
    margin-bottom: 8px;
`;
const Title = styled.div`
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 8px;
    color: gray;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const ImageHold = styled.div`
    width: 100%;
    height: 300px;
`;
const Wrapper = styled.div`
    width: 250px;
    border: 1px solid gray;
    display: flex;
    margin: 10px;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
    padding: 10px;

    margin-top: 30px;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;