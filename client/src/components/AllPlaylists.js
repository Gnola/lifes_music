import React, { Component } from 'react';

class AllPlaylists extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='allplaylists'>
              <div className='playlist-rows' id='timeofday'>
                <h3>Time of Day</h3>
                <div className='playlists'>Morning</div>
                <div className='playlists'>Afternoon</div>
                <div className='playlists'>Evening</div>
                <div className='playlists'>Night</div>
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
