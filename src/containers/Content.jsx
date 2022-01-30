import React from 'react';

const Content = (props) => {
	return (
		<div className='content' {...props}>
			{props.children}
		</div>
	);
};

export default Content;
