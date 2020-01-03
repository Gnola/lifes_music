import React, { Component } from 'react';
import AllMusicSongs from './AllMusicSongs.js';

class AllMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
          title:'',
          artist:'',
          album:'',
          genre:'',
        }
    }

    handleChange = (event) => {
      this.setState({
        [event.target.id] : event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.addSong(this.state)
      this.setState({
        title:'',
        artist:'',
        album: '',
        genre: ''
      })
    }

    render() {
        return (
            <div className='allmusic'>
              <form className='addmusic' onSubmit={this.handleSubmit}>
                <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder='Song Title'/>
                <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder='Artist'/>
                <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder='Album'/>
                <input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder='Genre'/>
                <input type='submit' value="Add to Music List"/>
              </form>
              <table className='allmusictable'>
                <thead>
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.songs.map((song, _id) => (
                    <AllMusicSongs key={_id} song={song} addSong={this.props.addSong} deleteSongs={this.props.deleteSongs}/>
                  ))}
                </tbody>
              </table>
            </div>
        );
    }
}

export default AllMusic;
