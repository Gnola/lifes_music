import React, { Component } from 'react';

class Sunshine extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='playlist-modal' id='sunshine'>
          <h2>Sunshine</h2>
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
                  {this.props.sunshineSongs.map((song, id) => (
                    <tr key={id}>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.album}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className='button' id='close-button' onClick={() => this.props.showSunshine}>Close</button>
        </div>
      </div>
    );
  }
}

export default Sunshine;
