import React, { Component } from 'react';
import AllSongs from './AllSongs.js';
import NewSong from './NewSong.js'
import EditSong from './EditSong.js'

class AllMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id: null,
          title:'',
          artist:'',
          album:'',
          genre:'',
          showEdit:false,
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
      })
    }


  render() {
    console.log(this.state);
    return (
      <div className='all-music'>
        {(this.state.showEdit)
          ?
          <EditSong editedSong={this.state} updateSong={this.props.updateSong} closeEdit={this.closeEdit}/>
          :
          <NewSong addSong={this.props.addSong}/>
        }
        <table className='all-music-table'>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Genre</th>
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
