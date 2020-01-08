// <-- MAIN.JS
import React, { Component } from 'react';
import AllSongs from './AllSongs.js';
// import NewSong from './NewSong.js'
import EditSong from './EditSong.js'

class AllMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
          showEdit:false,
          showAdd:false,
          _id: null,
          title:'',
          artist:'',
          album:'',
          where:[],
          energy:'',
          weight:'',
          what:''
        }
    }


    // SHOW EDIT MODAL <- AllSongs.js
    showEdit = (song) => {
      console.log(song); // info comes from AllSongs which comes from DB
      // this.props.location(song)
      this.setState({
        showEdit: true,
        _id:song._id,
        title:song.title,
        artist:song.artist,
        album:song.album,
        where:song.where,
        energy:song.energy,
        weight:song.weight,
        what:song.what
      })
    }

    // CLOSE EDIT MODAL <- EditSong.js
    closeEdit = () => {
      // this.props.checkCategories()
      this.setState({
        showEdit:false,
        title:'',
        artist:'',
        album:'',
        where:[],
        energy:'',
        weight:'',
        what:''
      })
    }


  render() {
    return (
      <div className='all-music'>
        {(this.state.showEdit) ? <EditSong checkCategories={this.props.checkCategories} editedSong={this.state} updateSong={this.props.updateSong} closeEdit={this.closeEdit}/> : null}
        <table className='all-music-table'>
          <thead>
            <tr>
              <th className='title-header'>Title</th>
              <th className='artist-header'>Artist</th>
              <th className='album-header'>Album</th>
              <th className='location-header'>Location(s)</th>
              <th className='delete-header'></th>
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
// {(this.props.allMusic) ? <button className='add-song-button' className='button-primary' onClick={this.showAdd}>Add Music</button> : null}
// <NewSong addSong={this.props.addSong} closeAdd={this.closeAdd}/>
