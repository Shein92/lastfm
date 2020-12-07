import { Dispatch } from 'redux';
import { API } from '../api/API';

const initialState: MainStateType = []

export const mainReducer = (state: MainStateType = initialState, action: ActionType) => {
	switch (action.type) {
		case 'main/SET-SONGS': {
			return action.songs
		}
		default: {
			return state;
		}
	}
}

//ActionCreators
const setSongs = (songs: Array<SongType>) => {
	return { type: 'main/SET-SONGS', songs } as const
}

//Thunk

export const getSongs = () => {
	return (dispatch: Dispatch) => {
		API.getPopularSongs()
			.then(res => {
				// debugger
				dispatch(setSongs(res.data.tracks.track))
			})
			.catch(err => {
				console.log(err)
			})
	}
}

export type MainStateType = Array<SongType>

export type SongType = {
	artist: {
		mbid: string
		name: string
		url: string
	}
	duration: string,
	image: Array<{ ["#text"]: string, image: string }>,
	listeners: string
	mbid: string
	name: string
	playcount: string,
	streamable: {
		["#text"]: string,
		fulltrack: string
	}
	url: string
}

type ActionType = ReturnType<typeof setSongs>