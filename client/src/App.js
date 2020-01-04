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
          afternoonSongs: [],
          eveningSongs: [],
          nighttimeSongs: [],
          springSongs: [],
          summerSongs: [],
          fallSongs: [],
          winterSongs: [],
          woodSongs:[],
          beachSongs:[],
          fieldSongs:[],
          sunshineSongs: [],
          rainSongs: [],
          cloudSongs:[],
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
            })
        })
      .catch(
        error => console.log(error) )
    }

    // ON LOAD
    componentDidMount () {
      this.fetchSongs()
    }

    clearCategories = () => {
      this.setState({
        morningSongs: [],
        afternoonSongs: [],
        eveningSongs: [],
        nighttimeSongs: [],
        springSongs: [],
        summerSongs: [],
        fallSongs: [],
        winterSongs: [],
        woodSongs:[],
        beachSongs:[],
        fieldSongs:[],
        sunshineSongs: [],
        rainSongs: [],
        cloudSongs:[],
      })
    }

  checkCategories = () => {
    for (var i = 0; i < this.state.songs.length; i++) {
      if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'light') {
        this.state.morningSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'high' && this.state.songs[i].what.toLowerCase() === 'medium') {
        this.state.afternoonSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'medium') {
        this.state.eveningSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'heavy') {
        this.state.nighttimeSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'light') {
        this.state.springSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'high' && this.state.songs[i].what.toLowerCase() === 'light') {
        this.state.summerSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'medium') {
        this.state.fallSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'heavy') {
        this.state.winterSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'high' && this.state.songs[i].what.toLowerCase() === 'light') {
        this.state.sunshineSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'heavy') {
        this.state.rainSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'medium') {
        this.state.cloudSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'light') {
        this.state.woodSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'light') {
        this.state.beachSongs.push(this.state.songs[i])
      }
      else if (this.state.songs[i].energy.toLowerCase() === 'high' && this.state.songs[i].what.toLowerCase() === 'medium') {
        this.state.fieldSongs.push(this.state.songs[i])
      }
    }
    console.log(this.state);
  }



    render() {
      return (
        <div>
          <Header />
          <Main
            songs={this.state.songs}
            morningSongs={this.state.morningSongs}
            addSong={this.addSong}
            updateSong={this.updateSong}
            deleteSongs={this.deleteSongs}
            checkCategories={this.checkCategories}
            clearCategories={this.clearCategories}/>
        </div>
      );
    }
}

export default App;
