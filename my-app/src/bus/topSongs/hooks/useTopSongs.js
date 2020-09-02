//Core
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { topSongsActions } from '../actions';

export const useTopSongs = () => {
    const dispatch = useDispatch();

    const {
        topSongs,
        isFetching,
        error,
    } = useSelector((state) => state.topSongs);

    const getTopSongs = () => {
        dispatch(topSongsActions.fetchAsync());
    };

    return {
        topSongs,
        getTopSongs,
        isFetching,
        error,
    }
};