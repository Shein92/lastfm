import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTracks, TrackResultType } from '../../bll/searchReducer';
import { AppRootStateType } from '../../bll/store';
import style from './SearchTrack.module.css';

const SearchTrack = React.memo(() => {

	const [value, setValue] = useState('');
	const [results, setResults] = useState(false);
	const dispatch = useDispatch();
	const searchRes = useSelector<AppRootStateType, Array<TrackResultType>>(state => state.search);

	const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
		setResults(false);
	}

	const onSearchBtnClick = () => {
		let nameOfTrack = value.split(' ').join('+').toLowerCase();
		if (value === '') {
			return
		}

		dispatch(getTracks(nameOfTrack));
		setResults(true);
	}

	return (
		<div className={style.wrapper}>
			<div className={style.searchRes}>
				<input type="text" placeholder={'Enter the name of song'} value={value} onChange={onValueChange} />
				<button onClick={onSearchBtnClick}>Search</button>
			</div>
			{results && <div className={style.searchResWrap}>
				<h3>Results: </h3>
				{searchRes.map((track, index) => {
					let num = index + 1;
					return (
						<TrackInfo name={track.name} artist={track.artist} num={num}/>
					)
				})}
			</div>}
		</div>
	)
})

export default SearchTrack;

type TrackInfoPropsType = {
	name: string,
	artist: string,
	num: number
}

const TrackInfo = (props: TrackInfoPropsType) => {


	return <div className={style.trak}>
			<span>{props.num}. "{props.name}" - </span>
			<span>{props.artist}</span>
		</div>
}