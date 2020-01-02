import React, { Component } from 'react';
import AllMusicSongs from './AllMusicSongs.js';

class AllMusic extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='allmusic'>
              <form className='addmusic'>
                <input type='text' placeholder='Song Title'/>
                <input type='text' placeholder='Artist'/>
                <input type='text' placeholder='Album'/>
                <input type='text' placeholder='Genre'/>
                <input type='submit' />
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
                  {this.props.data.map((song, _id) => (
                    <AllMusicSongs key={_id} song={song} />
                  ))}
                </tbody>
              </table>
            </div>
        );
    }
}

export default AllMusic;
