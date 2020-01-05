import React, { Component } from 'react';

class Spring extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='playlist-modal' id='spring'>
          <h2>Spring</h2>
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
                  {this.props.springSongs.map((song, id) => (
                    <tr key={id}>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.album}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='button' id='close-button' onClick={() => this.props.showSpring}>Close</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Spring;
