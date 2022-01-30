import React from 'react';

const Footer = (props) => {
	return <footer {...props}>{props.children ? props.children : 'footer @ component'}</footer>;
};

export default Footer;
