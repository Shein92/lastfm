import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSongs, MainStateType } from '../../bll/mainReducer';
import { AppRootStateType } from '../../bll/store';
import SingleTrack from '../SingleTrack/SingleTrack';

const TracksPage = React.memo(() => {

	const tracks = useSelector<AppRootStateType, MainStateType>(state => state.songs)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSongs());
	}, []);

	return (
		<div>
			{tracks.map(track => {
				return (
					<SingleTrack artistName={track.artist.name} imgLink={track.image[0]['#text']} linkOnArtist={track.artist.url} songName={track.name}/>
				)
			})}
		</div>
	)
})

export default TracksPage;