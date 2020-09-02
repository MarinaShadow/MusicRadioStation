
export const api = Object.freeze({
    getTopSongs: {
        fetch: () => {
            return fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json', {
                method: 'GET'
            })
        }
    },
});