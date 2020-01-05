import React, { Component } from 'react';

class Morning extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='playlist-modal' id='morning'>
          <h2>Morning</h2>
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
                {this.props.morningSongs.map((song, id) => (
                  <tr key={id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className='button' id='close-button' onClick={() => this.props.showMorning}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Morning;
