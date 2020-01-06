import React, { Component } from 'react';

// AllMusic.js <- SHOWEDIT
// App.js <--- Main.js <-- AllMusic.js <- DELETESONGS

class AllMusicSongs extends Component {
  render() {
    return (
      <tr>
        <td className='titles' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.title}</td>
        <td className='artists' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.artist}</td>
        <td className='albums' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.album}</td>
        <td className='locations'>{this.props.song.where.map((playlist, index) => (<span key={index}>| {playlist} |</span>))}</td>
        <td className='delete-song-button' onClick={() => {this.props.deleteSongs(this.props.song._id)}}>-</td>
      </tr>
    );
  }
}

export default AllMusicSongs;
// <td className='energy'>{this.props.song.energy}</td>
// <td className='weight'>{this.props.song.what}</td>
// <tr className='songs'>
//   <td className='primary' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.title}</td>
//   <td className='primary' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.artist}</td>
//   <td className='primary' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.album}</td>
//   <td className='secondary'>{this.props.song.energy}</td>
//   <td className='secondary'>{this.props.song.what}</td>
//   <td className='delete-button' onClick={() => {this.props.deleteSongs(this.props.song._id)}}>X</td>
// </tr>
