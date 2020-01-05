import React, { Component } from 'react';

class Nighttime extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='playlist-modal' id='night'>
          <h2>Nighttime</h2>
            <div className='playlist-div'>
              <table className='playlist-table'>
                <thead>
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.nighttimeSongs.map((song, id) => (
                    <tr key={id}>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.album}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='button' id='close-button' onClick={() => this.props.showNighttime}>Close</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Nighttime;
