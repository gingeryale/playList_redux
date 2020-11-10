import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { id: 1, title: 'song a', duration: '4:05' },
        { id: 2, title: 'song b', duration: '7:02' },
        { id: 3, title: 'song c', duration: '6:04' },
        { id: 4, title: 'song d', duration: '2:55' },
        { id: 5, title: 'song e', duration: '2:40' },
        { id: 6, title: 'song f', duration: '12:25' }
    ]
}


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})