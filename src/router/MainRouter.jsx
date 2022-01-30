import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentBox from '../components/ContentBox';
import TopicContainer from '../components/TopicContainer';
import MainLayout from '../containers/MainLayout';

const MainRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path=':course' element={<ContentBox />}>
						<Route path=':topic' element={<TopicContainer />}></Route>
					</Route>
				</Route>
			</Routes>
		</Router>
	);
};

export default MainRouter;
