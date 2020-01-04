import React, { Component } from 'react';
import AllSongs from './AllSongs.js';
import NewSong from './NewSong.js'
import EditSong from './EditSong.js'

class AllMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
          showEdit:false,
          id: null,
          title:'',
          artist:'',
          album:'',
          genre:'',
          energy:'',
          what:'',
          mood:''
        }
    }


    // SHOW EDIT MODAL
    showEdit = (song) => {
      this.setState({
        showEdit: true,
        id:song._id,
        title:song.title,
        artist:song.artist,
        album:song.album,
        genre:song.genre,
        energy:song.energy,
        what:song.what,
        mood:song.mood,
      })
    }

    // CLOSE EDIT MODAL
    closeEdit = () => {
      this.setState({
        showEdit:false,
        title:'',
        artist:'',
        album: '',
        genre: '',
        energy:'',
        what:'',
        mood:'',
      })
    }


  render() {
    return (
      <div className='all-music'>
        {(this.state.showEdit) ? <EditSong editedSong={this.state} updateSong={this.props.updateSong} closeEdit={this.closeEdit}/> : null}
        {(this.props.showAdd) ? <NewSong addSong={this.props.addSong} closeAdd={this.props.closeAdd}/> : null}
        <table className='all-music-table'>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Genre</th>
              <th>Energy Level</th>
              <th>Song Weight</th>
              <th>Mood</th>
            </tr>
          </thead>
          <tbody>
            {this.props.songs.map((song, _id) => (
              <AllSongs
                key={_id}
                song={song}
                addSong={this.props.addSong}
                showEdit={this.showEdit}
                updateSong={this.props.updateSong}
                deleteSongs={this.props.deleteSongs}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllMusic;
