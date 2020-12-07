import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './SingleTrack.module.css'

type SingleTrackPropsType = {
	imgLink: string,
	artistName: string,
	songName: string,
	linkOnArtist: string
}

const SingleTrack = React.memo((props: SingleTrackPropsType) => {

	let artistName = props.artistName.split(' ').join('+').toLowerCase();


	return (
		<div className={style.trackWrap}>
				<img src={`${props.imgLink}`} alt="No img" />
				<span className={style.coomonStyle}>{props.songName}</span>
				<NavLink className={style.coomonStyle} to={`/artist/${artistName}`}>{props.artistName}</NavLink>
				<a className={style.coomonStyle} href={props.linkOnArtist}><span>  Link on Last.fm</span></a>
		</div>
	)
})

export default SingleTrack;