import React from 'react';

const MainContainer = (props) => {
	return (
		<section className='main-container' {...props}>
			{props.children}
		</section>
	);
};

export default MainContainer;
