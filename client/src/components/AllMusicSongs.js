import React, { Component } from 'react';

class AllMusicSongs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <tr className='allmusicsong'>
            <td>{this.props.song.song}</td>
            <td>{this.props.song.artist}</td>
            <td>{this.props.song.album}</td>
          </tr>
        );
    }
}

export default AllMusicSongs;
