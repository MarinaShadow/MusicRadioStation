//Types
import { types} from './types';

//API
import { api } from './api';

export const topSongsActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.TOP_SONGS_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.TOP_SONGS_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.TOP_SONGS_FILL,
            payload,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.TOP_SONGS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    //Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.TOP_SONGS_FETCH_ASYNC,
        });

        dispatch(topSongsActions.startFetching());

        const response = await api.getTopSongs.fetch();

        if (response.status === 200) {

            const results = await response.json();

            dispatch(topSongsActions.fill(results));
        } else {
            const error = {
                status: response.status
            };

            dispatch(topSongsActions.setFetchingError(error));
        }

        dispatch(topSongsActions.stopFetching());
    }
});