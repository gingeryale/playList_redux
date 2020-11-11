import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { id: 1, title: 'song title a', duration: '0:30' },
        { id: 2, title: 'song title b', duration: '1:00' },
        { id: 3, title: 'song title c', duration: '1:30' },
        { id: 4, title: 'song title d', duration: '1:30' },
        { id: 5, title: 'song title e', duration: '0:30' },
        { id: 6, title: 'song title f', duration: '0:45' }
    ]
}


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        console.log("selectedSong");
        return action.payload;
    }
    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})