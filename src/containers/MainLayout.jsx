import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import RightBar from './RightBar';
import MainContainer from './MainContainer';
import NavBar from '../components/navBar/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<>
			<Header></Header>
			<MainContainer>
				<NavBar></NavBar>
				<Content>
					<h1>Content</h1>
					<Outlet></Outlet>
				</Content>
				<RightBar></RightBar>
			</MainContainer>
			<Footer></Footer>
		</>
	);
};

export default MainLayout;
