import { searchReducer } from './searchReducer';
import { mainReducer } from './mainReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import { artistReducer } from './artistReducer';

const rootReducer = combineReducers({
    songs: mainReducer,
    artist: artistReducer,
    search: searchReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>;