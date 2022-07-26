import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCart } from '../Global/GlobalState';

const Card = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.persistedReducer.cartItem);
    const qty = useSelector((state) => state.persistedReducer.qty);
    const totalPrice = useSelector((state) => state.persistedReducer.totalPrice);
    console.log(cart);
    return (
        <Container>
            <Left>
                { cart?.map((props) => (
                    <Wrapper key={ props._id }>
                        <ImageHold>
                            <Image src={ props.avatar } />
                        </ImageHold>

                        <Title>{ props.title }</Title>
                        <Description>
                            { props.description }
                        </Description>
                        <Price>{ totalPrice - props.price }</Price>

                        <Hold>
                            <Cart>
                                <Negative onClick={ () => {
                                    dispatch(removeCart(props));
                                } } >-</Negative>
                                <Count>{ props.qty }</Count>
                                <Positive onClick={ () => {
                                    dispatch(addToCart(props));

                                } }>+</Positive>
                            </Cart>
                            <Word>V</Word>
                        </Hold>
                    </Wrapper>
                )) }
            </Left>
            <Right>
                <Wrapper>

                    <Title>Quantity: <span>{ qty }</span></Title>
                    <Price>Price: <span>{ totalPrice }</span></Price>

                    <Hold>
                        <Button to='/form'>
                            Order
                        </Button>
                        {/* <Word>V</Word> */ }
                    </Hold>
                </Wrapper>
            </Right>
        </Container>
    );
};

export default Card;

const Button = styled(Link)`
    padding: 10px;
    border: 1px solid gray;
`;
const Right = styled.div`
    flex: 0.5;
    /* border: 1px solid gray; */
`;
const Left = styled.div`
    flex: 1;
    /* background-color: gray; */
`;
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
const Positive = styled.div`
    /* margin: 5px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;
const Count = styled.div`
    /* margin: 5px; */
    background-color: lightgray;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Negative = styled.div`
    /* width: 30px; */
    width: 100%;
    /* margin: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
`;
const Cart = styled.div`
height: 30px;
    display: flex;
    width: 100px;
    justify-content: space-between;
    /* background-color: lightgray; */
    border: 1px solid gray;
`;
const Hold = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Price = styled.div`
    font-weight: 700;
    margin-bottom: 8px;

    span{
    color: orange;
    }
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
    margin-top: 30px;
    padding: 10px;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;