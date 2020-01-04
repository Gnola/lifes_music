import React, { Component } from 'react';
import Morning from './playlists/Morning.js';
import Afternoon from './playlists/Afternoon.js';
import Evening from './playlists/Evening.js';
import Nighttime from './playlists/Nighttime.js';
import Spring from './playlists/Spring.js';
import Summer from './playlists/Summer.js';
import Fall from './playlists/Fall.js';
import Winter from './playlists/Winter.js';
import Sunshine from './playlists/Sunshine.js';
import Rain from './playlists/Rain.js';
import Clouds from './playlists/Clouds.js';
import Woods from './playlists/Woods.js';
import Beach from './playlists/Beach.js';
import Fields from './playlists/Fields.js';

class AllPlaylists extends Component {
    constructor(props) {
        super(props);
        this.state = {
          morning:false,
          afternoon:false,
          evening:false,
          nighttime:false,
          spring:false,
          summer:false,
          fall:false,
          winter:false,
          sunshine:false,
          rain:false,
          clouds:false,
          woods:false,
          beach:false,
          fields:false
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
    // EVENING
    showEvening = () => {
      this.setState({
        evening: !this.state.evening
      })
    }
    // NIGHTTIME
    showNighttime = () => {
      this.setState({
        nighttime: !this.state.nighttime
      })
    }
    // SPRING
    showSpring = () => {
      this.setState({
        spring: !this.state.spring
      })
    }
    // SUMMER
    showSummer = () => {
      this.setState({
        summer: !this.state.summer
      })
    }
    // FALL
    showFall = () => {
      this.setState({
        fall: !this.state.fall
      })
    }
    // WINTER
    showWinter = () => {
      this.setState({
        winter: !this.state.winter
      })
    }
    // SUNSHINE
    showSunshine = () => {
      this.setState({
        sunshine: !this.state.sunshine
      })
    }
    // RAIN
    showRain = () => {
      this.setState({
        rain: !this.state.rain
      })
    }
    // CLOUDS
    showClouds = () => {
      this.setState({
        clouds: !this.state.clouds
      })
    }
    // WOODS
    showWoods = () => {
      this.setState({
        woods: !this.state.woods
      })
    }
    // BEACH
    showBeach = () => {
      this.setState({
        beach: !this.state.beach
      })
    }
    // FIELDS
    showFields = () => {
      this.setState({
        fields: !this.state.fields
      })
    }

  render() {
    return (
      <div className='all-playlists'>
        <div className='playlist-rows' id='timeofday'>
          <h3>Time of Day</h3>
          <div className='playlists' id='morning' onClick={this.showMorning}> <h3>Morning</h3>
            {(this.state.morning) ? <Morning morningSongs={this.props.morningSongs} /> : null}
          </div>
          <div className='playlists' id='afternoon' onClick={this.showAfternoon}> <h3>Afternoon</h3>
            {(this.state.afternoon) ? <Afternoon afternoonSongs={this.props.afternoonSongs} /> : null}
          </div>
          <div className='playlists' id='evening' onClick={this.showEvening}> <h3>Evening</h3>
            {(this.state.evening) ? <Evening eveningSongs={this.props.eveningSongs} /> : null}
          </div>
          <div className='playlists' id='night' onClick={this.showNighttime}> <h3>Nighttime</h3>
            {(this.state.nighttime) ? <Nighttime nighttimeSongs={this.props.nighttimeSongs} /> : null}
          </div>
        </div>
        <div className='playlist-rows' id='seasons'>
          <h3>Seasons</h3>
          <div className='playlists' id='spring' onClick={this.showSpring}> <h3>Spring</h3>
            {(this.state.spring) ? <Spring springSongs={this.props.springSongs} /> : null}
          </div>
          <div className='playlists' id='summer' onClick={this.showSummer}> <h3>Summer</h3>
            {(this.state.summer) ? <Summer summerSongs={this.props.summerSongs} /> : null}
          </div>
          <div className='playlists' id='fall' onClick={this.showFall}> <h3>Fall</h3>
            {(this.state.fall) ? <Fall fallSongs={this.props.fallSongs} /> : null}
          </div>
          <div className='playlists' id='winter' onClick={this.showWinter}> <h3>Winter</h3>
            {(this.state.winter) ? <Winter winterSongs={this.props.winterSongs} /> : null}
          </div>
        </div>
        <div className='playlist-rows' id='weather'>
          <h3>Weather</h3>
          <div className='playlists' id='sunshine' onClick={this.showSunshine}> <h3>Sunshine</h3>
            {(this.state.sunshine) ? <Sunshine sunshineSongs={this.props.sunshineSongs} /> : null}
          </div>
          <div className='playlists' id='rain' onClick={this.showRain}> <h3>Rain</h3>
            {(this.state.rain) ? <Rain rainSongs={this.props.rainSongs} /> : null}
          </div>
          <div className='playlists' id='clouds' onClick={this.showClouds}> <h3>Clouds</h3>
            {(this.state.clouds) ? <Clouds cloudSongs={this.props.cloudSongs} /> : null}
          </div>
        </div>
        <div className='playlist-rows' id='location'>
          <h3>Locations</h3>
          <div className='playlists' id='woods' onClick={this.showWoods}> <h3>Woods</h3>
            {(this.state.woods) ? <Woods woodSongs={this.props.woodSongs} /> : null}
          </div>
          <div className='playlists' id='beach' onClick={this.showBeach}> <h3>Beach</h3>
            {(this.state.beach) ? <Beach beachSongs={this.props.beachSongs} /> : null}
          </div>
          <div className='playlists' id='fields' onClick={this.showFields}> <h3>Fields</h3>
            {(this.state.fields) ? <Fields fieldSongs={this.props.fieldSongs} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default AllPlaylists;
