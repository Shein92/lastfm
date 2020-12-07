import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = React.memo(() => {

	return (
		<div className={style.headerWrapper}>
			<div className={style.header}>
				<NavLink to={'/'}>{"Main Page"}</NavLink>
				<NavLink to={'/search'}>{"Search track"}</NavLink>
			</div>
		</div>
	)
})

export default Header;