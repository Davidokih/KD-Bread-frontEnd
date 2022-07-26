import React from "react";
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/CardHold/Home';
import Cart from './components/CardHold/Cart';
import Post from './components/Post';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AdminPage from './components/AdminPage';
import DispatcherPage from './components/DispatcherPage';
import FormPage from './components/FormPage';
import Confirm from './components/Confirm';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='/cart' element={ <Cart /> } />
					<Route path='/post' element={ <Post /> } />
					<Route path='/auth' element={ <SignUp /> } />
					<Route path='/auth/signin' element={ <SignIn /> } />
					<Route path='/admin' element={ <AdminPage /> } />
					<Route path='/dispatch' element={ <DispatcherPage /> } />
					<Route path='/Form' element={ <FormPage /> } />
					<Route path='/confirm' element={ <Confirm /> } />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
