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
          whereArray:[]
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
        })
      )
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

  // CLEAR PLAYLISTS
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
    console.log(this.state);
  }

  //
  checkCategories = () => {
    for (var i = 0; i < this.state.songs.length; i++) {
      if (this.state.songs[i].energy <=4 && this.state.songs[i].what >=6) {
        this.state.morningSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy >=6 && this.state.songs[i].what >=7) {
        this.state.afternoonSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy >=4 && this.state.songs[i].energy <=6 && this.state.songs[i].what >=4 && this.state.songs[i].what <=7) {
        this.state.eveningSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy <=3 && this.state.songs[i].what <=4) {
        this.state.nighttimeSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy >=5 && this.state.songs[i].what >=6) {
        this.state.sunshineSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy <=3 && this.state.songs[i].what <=4) {
        this.state.rainSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy <=5 && this.state.songs[i].what <=5) {
        this.state.cloudSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy <=6 && this.state.songs[i].what >=6) {
        this.state.springSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy >=6 && this.state.songs[i].what >=6) {
        this.state.summerSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy <=5 && this.state.songs[i].what <=5) {
        this.state.fallSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy <=4 && this.state.songs[i].what <=4) {
        this.state.winterSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy <=5 && this.state.songs[i].what <=5) {
        this.state.woodSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy >=5 && this.state.songs[i].energy <=7 && this.state.songs[i].what >=5 && this.state.songs[i].what <=8) {
        this.state.beachSongs.push(this.state.songs[i])
      }
      if (this.state.songs[i].energy >=5 && this.state.songs[i].what >=5) {
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
          addSong={this.addSong}
          updateSong={this.updateSong}
          deleteSongs={this.deleteSongs}
          checkCategories={this.checkCategories}
          clearCategories={this.clearCategories}
          morningSongs={this.state.morningSongs}
          afternoonSongs={this.state.afternoonSongs}
          eveningSongs={this.state.eveningSongs}
          nighttimeSongs={this.state.nighttimeSongs}
          springSongs={this.state.springSongs}
          summerSongs={this.state.summerSongs}
          fallSongs={this.state.fallSongs}
          winterSongs={this.state.winterSongs}
          sunshineSongs={this.state.sunshineSongs}
          rainSongs={this.state.rainSongs}
          cloudSongs={this.state.cloudSongs}
          woodSongs={this.state.woodSongs}
          beachSongs={this.state.beachSongs}
          fieldSongs={this.state.fieldSongs}
        />
      </div>
    );
  }
}

export default App;

// OG checkCategories()
// checkCategories = () => {
//   for (var i = 0; i < this.state.songs.length; i++) {
//     if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'light') {
//       this.state.morningSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'high' && this.state.songs[i].what.toLowerCase() === 'medium') {
//       this.state.afternoonSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'medium') {
//       this.state.eveningSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'heavy') {
//       this.state.nighttimeSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'light') {
//       this.state.springSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'high' && this.state.songs[i].what.toLowerCase() === 'light') {
//       this.state.summerSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'medium') {
//       this.state.fallSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'heavy') {
//       this.state.winterSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'high' && this.state.songs[i].what.toLowerCase() === 'light') {
//       this.state.sunshineSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'heavy') {
//       this.state.rainSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'medium') {
//       this.state.cloudSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'medium' && this.state.songs[i].what.toLowerCase() === 'light') {
//       this.state.woodSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'low' && this.state.songs[i].what.toLowerCase() === 'light') {
//       this.state.beachSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy.toLowerCase() === 'high' && this.state.songs[i].what.toLowerCase() === 'medium') {
//       this.state.fieldSongs.push(this.state.songs[i])
//     }
//   }
//   console.log(this.state);
// }

// OG AVG AND SUM CHECK
// testAgain = () => {
//   for (var i = 0; i < this.state.songs.length; i++) {
//     let sum = +this.state.songs[i].energy + +this.state.songs[i].what + +this.state.songs[i].mood + +this.state.songs[i].where
//     let average = sum / 3
//     let roundedAverage = average.toFixed(2)
//     console.log(this.state.songs[i].title +' has an average of ' + roundedAverage + ' and a sum of ' + sum);
//     if (roundedAverage >=3.33 && roundedAverage <=7.33 && sum >=10 && sum <=22 && this.state.songs[i].energy <=4 && this.state.songs[i].what >=5) {
//       this.state.morningSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=5.33 && roundedAverage <=9.33 && sum >=16 && sum <=28 && this.state.songs[i].energy >=6 && this.state.songs[i].what >=6) {
//       this.state.afternoonSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=3 && roundedAverage <=7 && sum >=9 && sum <=21 && this.state.songs[i].energy <=6 && this.state.songs[i].what >=4) {
//       this.state.eveningSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=1 && roundedAverage <=5 && sum >=3 && sum <=15 && this.state.songs[i].energy <=4 && this.state.songs[i].what <=4) {
//       this.state.nighttimeSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=4.66 && roundedAverage <=8.66 && sum >=14 && sum <=26) {
//       this.state.springSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=6 && roundedAverage <=10 && sum >=18 && sum <=30) {
//       this.state.summerSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=3.33 && roundedAverage <=7.33 && sum >=10 && sum <=22) {
//       this.state.fallSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=0 && roundedAverage <=4 && sum >=0 && sum <=4) {
//       this.state.winterSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=6 && roundedAverage <=10 && sum >=18 && sum <=30) {
//       this.state.sunshineSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=1 && roundedAverage <=5 && sum >=3 && sum <=15) {
//       this.state.rainSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=3.66 && roundedAverage <=7.66 && sum >=11 && sum <=23) {
//       this.state.cloudSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=2.33 && roundedAverage <=6.33 && sum >=7 && sum <=19) {
//       this.state.woodSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=5 && roundedAverage <=9 && sum >=15 && sum <=27) {
//       this.state.beachSongs.push(this.state.songs[i])
//     }
//     else if (roundedAverage >=4.66 && roundedAverage <=8.66 && sum >=14 && sum <=26) {
//       this.state.fieldSongs.push(this.state.songs[i])
//     }
//   }
//   console.log(this.state);
// }

// 2ND STYLE testAgain()
// testAgain = () => {
//   for (var i = 0; i < this.state.songs.length; i++) {
//     if (this.state.songs[i].energy <=4 && this.state.songs[i].what >=5) {
//       this.state.morningSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy >=6 && this.state.songs[i].what >=6) {
//       this.state.afternoonSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy <=6 && this.state.songs[i].what >=4) {
//       this.state.eveningSongs.push(this.state.songs[i])
//     }
//     else if (this.state.songs[i].energy <=4 && this.state.songs[i].what <=4) {
//       this.state.nighttimeSongs.push(this.state.songs[i])
//     }
//   }
//   console.log(this.state);
// }
