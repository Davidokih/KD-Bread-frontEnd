import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { addProduct } from "./Global/GlobalState";
import { useDispatch, useSelector } from "react-redux";

const Post = () => {
	const navigate = useNavigate();
	const [ image, setImage ] = useState('/Pin em Wallpapers.jpg');
	const [ avatar, setAvatar ] = useState("");
	const [ data, setData ] = useState([]);

	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const formSchema = yup.object().shape({
		title: yup.string().required("This field cannot be empty"),
		description: yup.string().required("This field cannot be empty"),
		price: yup.number().required("This field cannot be empty")
	});
	console.log(user);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const handleImage = (e) => {
		const file = e.target.files[ 0 ];
		const save = URL.createObjectURL(file);
		setImage(save);
		setAvatar(file);
	};

	const onSubmit = handleSubmit(async (value) => {
		console.log(value);
		const { title, description, price } = value;
		const mainURL = "http://localhost:3554";
		const url = `${mainURL}/api/post/upload`;

		const formData = new FormData();
		formData.append("title", title);
		formData.append("description", description);
		formData.append("price", price);
		formData.append("avatar", avatar);

		const config = {
			"content-type": "multipart/form-data",
			onUploadProgress: (ProgressEvent) => {
				const { loaded, total } = ProgressEvent;
				const percent = Math.floor((loaded * 100) / total);
				console.log(percent);
			},
		};

		await axios.post(url, formData, config).then((res) => {
			console.log("Error Data: ", res.data.data);
			setData(res.data.data);
			dispatch(addProduct());
		}).catch((err) => {
			alert(err.message);
		});

		navigate("/");
	});

	return (
		<Container>
			<Wrapper>
				<Card>
					<Form onSubmit={ onSubmit } type="multipart/form-data">
						<Holder>
							<Label>Title</Label>
							<Input placeholder="title" { ...register('title') } />
							{/* <Error>{ errors?.message.title }</Error> */ }
						</Holder>
						<Holder>
							<Label>Description</Label>
							<Input placeholder="description" { ...register('description') } />
							{/* <Error>{ errors?.message.description }</Error> */ }
						</Holder>
						<Holder>
							<Label>Price</Label>
							<Input placeholder="Price" type="number" { ...register('price') } />
							{/* <Error>{ errors?.message.description }</Error> */ }
						</Holder>

						<ImageHolder htmlFor="pix">
							<Image src={ image } />
							<ImageLabel>Upload your Image</ImageLabel>
							<ImageInput
								id="pix"
								onChange={ handleImage }
								type="file"
								accept="image/*"
							/>
						</ImageHolder>
						<Button type="submit" bg="#004080">
							Upload
						</Button>
					</Form>

					{/* <br /> */ }

				</Card>
			</Wrapper>
		</Container>
	);
};

export default Post;

const BarButton = styled.div`
	flex: 1;
	background-color: ${({ bg }) => bg};
	display: flex;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	align-items: center;
	text-transform: uppercase;
	transition: all 350ms;

	:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.7);
	}
`;

const Bar = styled.div`
	width: 100%;
	height: 60px;
	color: white;
	margin-bottom: 30px;
	display: flex;
`;

const Span = styled(Link)`
	margin-left: 5px;
	text-decoration: none;
	color: blue;
	cursor: pointer;
`;

const Div = styled.div`
	display: flex;
	margin-top: 10px;
`;

const Button = styled.button`
	width: 80%;
	margin-top: 15px;
	height: 40px;
	font-family: Poppins;
	font-size: 18px;
	text-transform: uppercase;
	color: white;
	font-weight: 300;
	outline: none;
	border: 0;
	color: blue;
	/* background-color: #004080; */

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

const ImageLabel = styled.div`
	/* margin-bottom: 50px; */
	position: relative;
	bottom: 50px;
`;

const ImageHolder = styled.label`
	width: 80%;
	margin-top: 30px;
	/* height: 150px; */
	align-items: center;
	display: flex;
	flex-direction: column;
	/* background-color: gray; */
	cursor: pointer;
`;

const Image = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	/* border-radius: 50%; */
	background-color: darkorange;
	margin-bottom: 20px;
`;

const Card = styled.div`
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	width: 500px;
	min-height: 500px;
	border-radius: 5px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	/* padding-bottom: 20px; */
	flex-direction: column;
	overflow: hidden;
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
