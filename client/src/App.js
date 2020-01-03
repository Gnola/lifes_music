import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';


let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://mern-music.herokuapp.com'
} else {
  baseUrl = 'https://mern-music.herokuapp.com'
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          songs: [],
          morningSongs: [],
        }
    }

    // READ
    fetchSongs = () => {
      fetch( `${baseUrl}/allsongs` )
      .then(
        res => res.json())
      .then(
        res => this.setState({
          songs:res
        }))
      .catch(
        err => console.log(err))
    }

    // CREATE
    addSong = (newSong) => {
      console.log(newSong);
      fetch( `${baseUrl}/allsongs`,
        {
          body: JSON.stringify(newSong),
          method: 'POST',
          headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json'}
        })
      .then(
        newSong => {
          return newSong.json()
        })
      .then(
        jsonedSong => this.setState({
          songs:[jsonedSong,...this.state.songs]
        }))
      .catch(
        error => console.log(error))
    }

    // UPDATE
    updateSong = (editedSong) => {
      console.log(editedSong);
      fetch( `${baseUrl}/allsongs/${editedSong.id}`,
        {
          body: JSON.stringify(editedSong),
          method: 'PUT',
          headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'}
        })
      .then(
        updatedSong => {
          this.fetchSongs()
        })
      .catch(
        error => console.log(error) )
    }

    // DELETE
    deleteSongs = (id) => {
      fetch( `${baseUrl}/allsongs/${id}`,
        {
          method: 'DELETE',
          headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'}
        })
      .then(
        json => {
          this.setState(
            prevState => {
              const songs = prevState.songs.filter(songs => songs._id !== id)
              return { songs }
            }
          )
        })
      .catch(
        error => console.log(error) )
    }

    checkGenre = () => {
      for (var i = 0; i < this.state.songs.length; i++) {
        if (this.state.songs[i].genre === 'Rock') {
          this.state.morningSongs.push(this.state.songs[i])
        }
      }
    }


    // ON LOAD
    componentDidMount () {
      this.fetchSongs()
      this.checkGenre()
    }


    render() {
      return (
        <div>
          <button onClick={this.checkGenre}>Check</button>
          <Header />
          <Main
            songs={this.state.songs}
            morningSongs={this.state.morningSongs}
            addSong={this.addSong}
            updateSong={this.updateSong}
            deleteSongs={this.deleteSongs}/>
        </div>
      );
    }
}

export default App;
