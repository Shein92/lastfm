import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Artist from '../ArtistPage/Artist';
import Header from '../Header/Header';
import SearchTrack from '../SearchTrackPage/SearchTrack';
import TracksPage from '../TracksPage/TracksPage';

const MainPage = React.memo(() => {

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path={'/'} render={() => <TracksPage />} />
				<Route path={'/search'} render={() => <SearchTrack />} />
				<Route path={'/artist/:artistName'} render={() => <Artist />} />
			</Switch>
		</div>
	)
})

export default MainPage;