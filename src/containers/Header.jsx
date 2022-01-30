import React from 'react';

const Header = (props) => {
	return <header {...props}>{props.children ? props.children : 'Header - Component'}</header>;
};

export default Header;
