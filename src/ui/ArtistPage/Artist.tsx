import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ArtistStateType, getArtistInfo } from '../../bll/artistReducer';
import { AppRootStateType } from '../../bll/store';
import style from './Artist.module.css';


const Artist = () => {
	//@ts-ignore
	let { artistName } = useParams();

	const artist = useSelector<AppRootStateType, ArtistStateType>(state => state.artist)
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(getArtistInfo(artistName))
	}, [])

	return (
		<div>
			<div className={style.img}>
				<img src={artist.image[0]['#text']} alt="no img:(" />
			</div>
			<div >
				<h3>{artist.name}</h3>
				<div className={style.bio}>
					<h4>Short bio:</h4> 
					{artist.bio.summary}
				</div>
			</div>
			<div>
				<h5>Tags:</h5>
				{artist.tags.tag.map(tag => {
					return (
						<span className={style.tag}>{tag.name + ' '}</span>
					)
				})}
			</div>
		</div>
	)
}

export default Artist;