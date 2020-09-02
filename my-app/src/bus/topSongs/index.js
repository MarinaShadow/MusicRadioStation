// Core
import React, {useEffect} from 'react';

// Hooks
import { useTopSongs } from './hooks/useTopSongs';

export const TopSongs = () => {
    const { topSongs, getTopSongs, isFetching, error } = useTopSongs();

    useEffect(() => getTopSongs(), []);

    if (error && error.status === 404) {
        return <p>Not found!</p>
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong...</p>
    }

    const topSongsJSX = topSongs &&
        topSongs.map((item, index) => {
            return (
            <div key={index}>
                <span>{index+1}</span>

                {item.title.label}
                &nbsp; &#9825;
            </div>
        )
        });

    return (
        <>
            <p>TopSongs</p>
            {topSongsJSX}
        </>
    );
};