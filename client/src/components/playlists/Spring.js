import React, { Component } from 'react';

class Spring extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='playlist-modal'>
          <h2>Spring</h2>
          <table className='playlist-table'>
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {this.props.springSongs.map((song, id) => (
                <tr key={id}>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.genre}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => this.props.showSpring}>Close</button>
        </div>
      </div>
    );
  }
}

export default Spring;
