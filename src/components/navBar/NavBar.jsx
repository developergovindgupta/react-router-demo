import React, { useEffect, useState } from 'react';
import { getPaths } from '../../api/apimethods';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const [paths, setPaths] = useState([]);

	useEffect(() => {
		setPaths(getPaths());
	}, []);
	useEffect(() => {
		document.querySelectorAll('nav a.active').forEach((a) => {
			a.closest('li').classList.add('active');
			let ul = a.closest('ul');
			let pLi = ul && ul.previousElementSibling;
			pLi && pLi.classList.add('open');
		});
	});
	const setActiveLink = (path) => {
		console.log('path:', path);
		document.querySelectorAll('nav li').forEach((li) => {
			li.classList.remove('active');
		});
		let pathLi = document.querySelector('nav li[pathto="' + path + '"]');
		if (pathLi) {
			pathLi.classList.add('active');
			let ul = pathLi.closest('ul');
			let pLi = ul && ul.previousElementSibling;
			pLi && pLi.classList.add('open');
		}
	};

	const getPathsList = (parentId, basePath) => {
		const filterPaths = paths.filter((x) => x.parentId === parentId);
		return filterPaths.length ? (
			<ul>
				{filterPaths.map((path) => {
					let pathTo = basePath + path.folder;
					return (
						<React.Fragment key={path.id}>
							<li pathto={pathTo}>
								<NavLink
									className={({ isActive }) => {
										isActive && setActiveLink(pathTo);
										return isActive === true ? 'active' : '';
									}}
									to={pathTo}
									onClick={(e) => {
										e.target.closest('li').classList.toggle('open');
									}}
								>
									{path.name}
								</NavLink>
							</li>
							{getPathsList(path.id, path.folder + '/')}
						</React.Fragment>
					);
				})}
			</ul>
		) : (
			''
		);
	};
	return <nav>{getPathsList(-1, '')}</nav>;
};

export default NavBar;
