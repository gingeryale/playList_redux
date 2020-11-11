import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.id}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectSong(song)}
                            className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    render() {
        console.log("render method ", this.props)
        return (
            <div className="ui divided list"> {this.renderList()}</div >
        )
    }
}
// called with all the data
const mapStateToProps = (state) => {
    console.log("mstp ", state);
    return { songs: state.songs };
}

// connect pass into componenet as a prop
export default connect(mapStateToProps, { selectSong })(SongList);
// second arg {selectSong: selectSong}