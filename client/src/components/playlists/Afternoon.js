import React, { Component } from 'react';

class Afternoon extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='playlist-modal'>
          <h2>Afternoon</h2>
          <table className='playlist-table'>
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
              </tr>
            </thead>
            <tbody>
              {this.props.afternoonSongs.map((song, id) => (
                <tr key={id}>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => this.props.showAfternoon}>Close</button>
        </div>
      </div>
    );
  }
}

export default Afternoon;
