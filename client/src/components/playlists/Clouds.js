import React, { Component } from 'react';

class Clouds extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='playlist-modal' id='clouds'>
          <h2>Clouds</h2>
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
                  {this.props.cloudSongs.map((song, id) => (
                    <tr key={id}>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.album}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='button' id='close-button' onClick={() => this.props.showClouds}>Close</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Clouds;
