import React from 'react';
import { useParams } from 'react-router-dom';

const TopicContainer = (props) => {
	const { topic } = useParams();
	return (
		<div>
			<h3>{topic}</h3>
		</div>
	);
};

export default TopicContainer;
