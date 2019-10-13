
import {selectSong} from "../actions";
import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'in the end', duration: '2:47' },
        { title: 'hybrid theory ', duration: '3:47' },
        { title: 'what i have done', duration: '4:54' },
        { title: 'numb', duration: '2:30' },
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectSong: selectedSongReducer,
});

