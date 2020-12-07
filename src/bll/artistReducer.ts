import { Dispatch } from 'redux';
import { API } from '../api/API';

const initialState: ArtistStateType = {
	bio: {
		content: '',
		links: {
			link: {
				['#text']: '',
				href: '',
				rel: ''
			}
		},
		published: '',
		summary: '',
	},
	image: [
		{
			['#text']: '',
			size: ''
		}
	],
	mbid: '',
	name: '',
	ontour: '',
	similar: {
		artist: [],
	},
	stats: {
		listeners: '',
		playcount: ''
	},
	streamable: '',
	tags: {
		tag: []
	},
	url: ''
}

export const artistReducer = (state: ArtistStateType = initialState, action: ActionType) => {
	switch (action.type) {
		case 'artist/SET-ARTIST': {
			return action.artistInfo;
		}
		default: {
			return state
		}
	}
}

//ActionCreators
const setArtist = (artistInfo: any) => {
	return { type: 'artist/SET-ARTIST', artistInfo } as const
}

//Thunk

export const getArtistInfo = (artistName: string) => {
	return (dispatch: Dispatch) => {
		API.getInfoAboutArtist(artistName)
			.then(res => {
				// debugger
				// console.log(res.data.artist);
				dispatch(setArtist(res.data.artist))
			})
			.catch(err => {
				console.log(err.message);
			})
	}
}

// type ArtistStateType = any
export type ArtistStateType = {
	bio: {
		content: string,
		links: {
			link: { ['#text']: string, href: string, rel: string }
		},
		published: string,
		summary: string,
	},
	image: Array<{ ['#text']: string, size: string }>,
	mbid: string,
	name: string,
	ontour: string,
	similar: {
		artist: Array<{ image: Array<{ ['#text']: string, size: string }>, name: string, url: string }>,
	},
	stats: {
		listeners: string,
		playcount: string,
	},
	streamable: string,
	tags: {
		tag: Array<{ name: string, url: string }>
	},
	url: string,
};
type ActionType = ReturnType<typeof setArtist>