import React, { Component } from 'react';

class AllMusicSongs extends Component {
  render() {
    return (
      <tr className='all-songs'>
        <td>{this.props.song.title}</td>
        <td>{this.props.song.artist}</td>
        <td>{this.props.song.album}</td>
        <td>{this.props.song.genre}</td>
        <td>{this.props.song.energy}</td>
        <td>{this.props.song.what}</td>
        <td>{this.props.song.mood}</td>
        <td className='edit-button' onClick={() => {this.props.showEdit(this.props.song)}}>Edit</td>
        <td className='delete-button' onClick={() => {this.props.deleteSongs(this.props.song._id)}}>X</td>
      </tr>
    );
  }
}

export default AllMusicSongs;
