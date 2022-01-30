import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const ContentBox = (props) => {
	const { course } = useParams();
	return (
		<div>
			<h1>{course}</h1>
			<Outlet />
		</div>
	);
};

export default ContentBox;
