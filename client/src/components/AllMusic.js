import React, { Component } from 'react';
import AllMusicSongs from './AllMusicSongs.js';
// import EditSong from './EditSong.js'

class AllMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id: null,
          title:'',
          artist:'',
          album:'',
          genre:'',
          subGenres:[],
          showEdit:false,
        }
    }

    handleChange = (event) => {
      this.setState({
        [event.target.id] : event.target.value
      })

    }

    handleSubmit = (event) => {
      event.preventDefault()
      if (this.state.showEdit) {
        this.props.updateSong(this.state)
        this.setState({
          showEdit:false
        })
      } else if (!this.state.showEdit) {
        this.props.addSong(this.state)
      }
      this.setState({
        title:'',
        artist:'',
        album: '',
        genre: '',
        subGenres:''
      })
    }

    showEdit = (song) => {
      this.setState({
        showEdit: true,
        id:song._id,
        title:song.title,
        artist:song.artist,
        album:song.album,
        genre:song.genre,
        subGenres:song.subGenres,
      })
      console.log(this.state.subGenres);
    }

    closeEdit = () => {
      this.setState({
        showEdit:false,
        title:'',
        artist:'',
        album: '',
        genre: '',
        subGenres:'',
      })
    }


    render() {
        return (
            <div className='allmusic'>
            {(this.state.showEdit) ?
              <div className='editmusicmodal'>
              <form className='editmusic' onSubmit={this.handleSubmit}>
                <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder={this.state.title}/>
                <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder={this.state.artist}/>
                <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder={this.state.album}/>
                <input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder={this.state.genre}/>
                <textarea type='text' id='subGenres' value={this.state.subGenres} onChange={this.handleChange} placeholder={this.state.subGenres}/>
                <input type='submit' value="Edit Song"/>
                <button onClick={this.closeEdit}>Cancel</button>
                </form>
              </div>:
              <form className='addmusic' onSubmit={this.handleSubmit}>
                <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder='Song Title'/>
                <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder='Artist'/>
                <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder='Album'/>
                <input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder='Genre'/>
                <input type='text' id='subGenres' value={this.state.subGenres} onChange={this.handleChange} placeholder='Sub-Genres'/>
                <input type='submit' value="Add to Music"/>
              </form>
            }
              <table className='allmusictable'>
                <thead>
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Sub-Genres</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.songs.map((song, _id) => (
                    <AllMusicSongs key={_id} song={song} addSong={this.props.addSong} showEdit={this.showEdit} updateSong={this.props.updateSong} deleteSongs={this.props.deleteSongs}/>
                  ))}
                </tbody>
              </table>
            </div>
        );
    }
}

export default AllMusic;
