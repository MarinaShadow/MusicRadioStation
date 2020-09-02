import { combineReducers } from 'redux';

import { topSongsReducer as topSongs }  from '../bus/topSongs/reducer';

export const rootReducer = combineReducers({
    topSongs,
});