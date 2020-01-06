// <-- APP.JS
import React, { Component } from 'react';
import AllMusic from './AllMusic.js';
import AllPlaylists from './AllPlaylists.js'
// import NewSong from './NewSong.js'


class Main extends Component {
    constructor(props) {
      super(props)
      this.state = {
        allMusic:true,
        allPlaylists: false,
        showAdd:false,
      }
    }

    // SHOW MUSIC
    showAllMusic = () => {
      this.props.clearCategories() // App.js <- CLEAR PLAYLISTS
      this.setState({
        allMusic: true,
        allPlaylists: false
      })
      console.log(this.state);
    }

    // SHOW PLAYLISTS
    showAllPlaylists = () => {
      this.props.checkCategories() // App.js <- FILL PLAYLISTS
      this.setState({
        allMusic: false,
        allPlaylists: true
      })
      console.log(this.state);
    }


    render() {
      return (
        <div className='main'>
          <div className='main-buttons'>
            <button className={(this.state.allMusic) ? 'button-primary' : null} onClick={this.showAllMusic}>All Music</button>
            <button className={(this.state.allPlaylists) ? 'button-primary' : null} onClick={this.showAllPlaylists}>All Playlists</button>
          </div>
          {(this.state.allMusic) ?
          <AllMusic
            songs={this.props.songs}
            addSong={this.props.addSong}
            updateSong={this.props.updateSong}
            deleteSongs={this.props.deleteSongs}
            closeAdd={this.closeAdd}
            addAnother={this.addAnother}
            another={this.state.another}
            allMusic={this.state.allMusic}
            checkCategories={this.props.checkCategories}
          />
          :
          <AllPlaylists
            morningSongs={this.props.morningSongs}
            afternoonSongs={this.props.afternoonSongs}
            eveningSongs={this.props.eveningSongs}
            nighttimeSongs={this.props.nighttimeSongs}
            springSongs={this.props.springSongs}
            summerSongs={this.props.summerSongs}
            fallSongs={this.props.fallSongs}
            winterSongs={this.props.winterSongs}
            sunshineSongs={this.props.sunshineSongs}
            rainSongs={this.props.rainSongs}
            cloudSongs={this.props.cloudSongs}
            woodSongs={this.props.woodSongs}
            beachSongs={this.props.beachSongs}
            fieldSongs={this.props.fieldSongs}
          />
          }

        </div>
      );
    }
}

export default Main;
