import React, { Component } from 'react';

class AllMusicSongs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <tr className='allmusicsong'>
            <td onClick={() => {this.props.addSong(this.props.song)}}>{this.props.song.title}</td>
            <td>{this.props.song.artist}</td>
            <td>{this.props.song.album}</td>
            <td onClick={() => {this.props.deleteSongs(this.props.song._id)}}>X</td>
          </tr>
        );
    }
}

export default AllMusicSongs;
