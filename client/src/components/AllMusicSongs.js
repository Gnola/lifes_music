import React, { Component } from 'react';

class AllMusicSongs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <tr className='allmusicsong'>
            <td>{this.props.song.title}</td>
            <td>{this.props.song.artist}</td>
            <td>{this.props.song.album}</td>
            <td>{this.props.song.genre}</td>
            <td>{this.props.song.subGenres}</td>
            <td className='editbutton' onClick={() => {this.props.showEdit(this.props.song)}}>Edit</td>
            <td className='deletebutton' onClick={() => {this.props.deleteSongs(this.props.song._id)}}>X</td>
          </tr>
        );
    }
}

export default AllMusicSongs;
