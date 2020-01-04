import React, { Component } from 'react';
import AllMusic from './AllMusic.js';
import AllPlaylists from './AllPlaylists.js'

class Main extends Component {
    constructor(props) {
      super(props)
      this.state = {
        allMusic:true,
        allPlaylists: false,
        showAdd: false
      }
    }

    // SHOW ADD SONG MODAL
    showAdd = () => {
      this.setState({
        showAdd: true
      })
    }

    // CLOSE ADD SONG MODAL
    closeAdd = () => {
      this.setState({
        showAdd:false
      })
    }

    // Show Music
    showAllMusic = () => {
      this.setState({
        allMusic: true,
        allPlaylists: false
      })
      this.props.clearCategories()
    }

    // Show Playlists
    showAllPlaylists = () => {
      this.setState({
        allMusic: false,
        allPlaylists: true
      })
      this.props.checkCategories()
    }

    render() {
      return (
        <div>
          <div className='main-buttons'>
            <button onClick={this.showAllMusic}>All Music</button>
            <button onClick={this.showAllPlaylists}>All Playlists</button>
          </div>
          {(this.state.allMusic) ? <button className='add-song-button' onClick={this.showAdd}>Add Music</button> : null}
          {(this.state.allMusic)
            ?
            <AllMusic songs={this.props.songs} addSong={this.props.addSong} updateSong={this.props.updateSong} deleteSongs={this.props.deleteSongs} showAdd={this.state.showAdd} closeAdd={this.closeAdd}/>
            :
            <AllPlaylists morningSongs={this.props.morningSongs} />
          }

        </div>
      );
    }
}

export default Main;
