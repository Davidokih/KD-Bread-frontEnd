import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from 'react-redux';

const Inputs = ({ props }) => {
    const [ Text, setText ] = useState("");


    const purchased = async () => {
        const mainURL = "http://localhost:3554";
        const url = `${mainURL}/api/user/${props._id}`;

        await axios.patch(url, { verifiedToken: Text });
    };
    return (
        <div>
            <input placeholder='input token' value={ Text } onChange={ (e) => {
                setText(e.target.value);
            } } />
            <button onClick={ purchased } style={ { cursor: "pointer" } }>Submit</button>
        </div>
    );
};

export default Inputs;