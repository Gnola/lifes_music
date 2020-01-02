import React, { Component } from 'react';
import AllMusic from './AllMusic.js';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <div className='mainbuttons'>
                <button>All Music</button>
                <button>All Playlists</button>
              </div>
              <AllMusic data={this.props.data}/>
            </div>
        );
    }
}

export default Main;
