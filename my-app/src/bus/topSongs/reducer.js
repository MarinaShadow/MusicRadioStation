// Types
import { types } from './types';

const initialState = {
    topSongs: [],
    isFetching: false,
    error: null,
};


export const topSongsReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case types.TOP_SONGS_START_FETCHING:
            return { ...state, isFetching: true };
        case types.TOP_SONGS_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.TOP_SONGS_SET_FETCHING_ERROR:
            return { ...state, error: payload, topSongs: [] };
        case types.TOP_SONGS_FILL:
            return { ...state, topSongs: payload.feed.entry, error: null };
        default:
            return state;
    }
};
