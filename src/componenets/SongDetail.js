import React from 'react';
import { connect } from 'react-redux';

// could pass props but destructure 
const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select A Title</div>
    }
    return (
        <div>
            <h2>Details for:</h2>
            <p><b>{song.title}</b></p>
            <p>Duration: {song.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);