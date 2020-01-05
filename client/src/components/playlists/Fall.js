import React, { Component } from 'react';

class Fall extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='playlist-modal' id='fall'>
          <h2>Fall</h2>
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
                  {this.props.fallSongs.map((song, id) => (
                    <tr key={id}>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.album}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='button' id='close-button' onClick={() => this.props.showFall}>Close</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Fall;
