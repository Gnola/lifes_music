import React, { Component } from 'react';
import Morning from './playlists/Morning.js';

class AllPlaylists extends Component {
    constructor(props) {
        super(props);
        this.state = {
          morning:false,
          afternoon:false,
          evening:false,
          night:false,
        }
    }

    // MORNING
    showMorning = () => {
      this.setState({
        morning: !this.state.morning
      })
    }

    // AFTERNOON
    showAfternoon = () => {
      this.setState({
        afternoon: !this.state.afternoon
      })
    }

  render() {
    return (
      <div className='all-playlists'>
        <div className='playlist-rows' id='timeofday'>
          <h3>Time of Day</h3>
          <div className='playlists' onClick={this.showMorning}>
            <h3>Morning</h3>
            {(this.state.morning) ? <Morning morningSongs={this.props.morningSongs} /> : null}
          </div>
          <div className='playlists' onClick={this.showAfternoon}>
          </div>
          <div className='playlists'>
            <h3>Evening</h3>
          </div>
          <div className='playlists'>
            <h3>Night</h3>
          </div>
        </div>
        <div className='playlist-rows' id='timeofyear'>
          <h3>Seasons</h3>
          <div className='playlists'>Spring</div>
          <div className='playlists'>Summer</div>
          <div className='playlists'>Fall</div>
          <div className='playlists'>Winter</div>
        </div>
        <div className='playlist-rows' id='location'>
          <h3>Locations</h3>
          <div className='playlists'>Woods</div>
          <div className='playlists'>Beach</div>
          <div className='playlists'>Mountains</div>
          <div className='playlists'>Open Fields</div>
        </div>
        <div className='playlist-rows' id='activity'>
          <h3>Activity</h3>
          <div className='playlists'>Workout</div>
          <div className='playlists'>Relaxation</div>
        </div>
        <div className='playlist-rows' id='mood'>
          <h3>Mood</h3>
          <div className='playlists'>Happy</div>
          <div className='playlists'>Sad</div>
        </div>
        <div className='playlist-rows' id='weather'>
          <h3>Weather</h3>
          <div className='playlists'>Sunshine</div>
          <div className='playlists'>Rain</div>
          <div className='playlists'>Clouds</div>
        </div>
      </div>
    );
  }
}

export default AllPlaylists;
