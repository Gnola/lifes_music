import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className='header'>
              <div className='header-text'>
                <h1>MernMusic</h1>
                <h4>Suggested playlists generated by your personal music</h4>
              </div>
            </div>
        );
    }

}

export default Header;
