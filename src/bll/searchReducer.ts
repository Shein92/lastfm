import { Dispatch } from 'redux';
import { API } from '../api/API';

const initialState: SearchStateType = []

export const searchReducer = (state: SearchStateType = initialState, action: ActionsType) => {
	switch (action.type) {
		case 'search/SET-TRACKS': {
			return action.tracks
		}
		default: {
			return state
		}
	}
}

//ActionCreators

const setTracks = (tracks: Array<TrackResultType>) => {
	return { type: 'search/SET-TRACKS', tracks } as const
}

//Thunk

export const getTracks = (nameOfTrack: string) => {
	return (dispatch: Dispatch) => {
		API.searchTrack(nameOfTrack)
			.then(res => {
				// debugger
				// console.log(res.data.results.trackmatches.track)
				dispatch(setTracks(res.data.results.trackmatches.track))
			})
			.catch(err => {
				console.log(err.message)
			})
	}
}
type SearchStateType = Array<TrackResultType>;

export type TrackResultType = {
	artist: string
	image: Array<{ ['#text']: string, size: string }>,
	listeners: string
	mbid: string,
	name: string
	streamable: string
	url: string
}
type ActionsType = ReturnType<typeof setTracks>;