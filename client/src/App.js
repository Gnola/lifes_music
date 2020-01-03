import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';

// import music from './Data.js';


let baseUrl = '';

if (process.env.NODE_ENV === 'development') { // if this process = 'development' then use the baseUrl
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://mern-music.herokuapp.com'
} else {
  baseUrl = 'https://mern-music.herokuapp.com'
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // data: music,
          songs: [],
          playlists: [],
          morning: [],
        }
    }

    // GET ALL SONGS
    fetchSongs = () => {
      fetch(`${baseUrl}/songs`)
      .then( res => res.json())
      .then(res => this.setState({
        songs:res
      }))
      .catch( err => console.log(err))
    }

    // ADD SONGS
    addSong = (newSong) => {
      fetch(`${baseUrl}/songs`,
        {
          body: JSON.stringify(newSong),
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
      .then( newSong => { return newSong.json()})
      .then( jsonedSong => this.setState({
          songs:[jsonedSong,...this.state.songs]
        }))
    .catch( error => console.log(error))
    }

    updateSong = (editedSong) => {
      console.log(editedSong);
    fetch(
      `${baseUrl}/songs/${editedSong.id}`, // using the id of the updateData which is pulled from form data
      {
        body: JSON.stringify(editedSong),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then( updatedSong => {
        this.fetchSongs()
      })
      .catch( error => console.log(error) )
  }

    // DELETE SONGS
    deleteSongs = (id) => {
    fetch(
      `${baseUrl}/songs/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then( json => {
        this.setState(prevState => {
          const songs = prevState.songs.filter(songs => songs._id !== id)
          return { songs }
        })
      })
      .catch( error => console.log(error) )
  }

  checkGenre = () => {
    for (var i = 0; i < this.state.songs.length; i++) {
      if (this.state.songs[i].subGenres == 'Metal' || this.state.songs[i].subGenres == 'Roots Reggae') {
        this.state.morning.push(this.state.songs[i]);
      }
    }
    console.log(this.state.subGenreArray);
    console.log(this.state.songs);
    console.log(this.state.morning);
  }

    componentDidMount () {
      this.fetchSongs()
      // this.checkGenre()
    }

    // fetchPlaylists = () => {
    //   fetch(`${baseUrl}/playlists`)
    //   .then( res => res.json())
    //   .then(res => this.setState({
    //     playlists: res
    //   }))
    //   .catch( err => console.log(err))
    // }

    // addSongToPlaylist = (song) => {
    //   this.setState({
    //     playlists:[song,...this.state.playlists]
    //   })
    //   console.log(this.state.playlists);
    // }

    render() {
        return (
            <div>
              <button onClick={this.checkGenre}>Check Genre</button>
              <Header />
              <Main songs={this.state.songs} morning={this.state.morning} addSong={this.addSong} updateSong={this.updateSong} deleteSongs={this.deleteSongs}/>
            </div>
        );
    }
}

export default App;
