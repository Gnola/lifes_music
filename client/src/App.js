import React, { Component } from 'react';

import Header from './components/Header.js';
import Main from './components/Main.js';

// import music from './Data.js';


let baseUrl = '';

if (process.env.NODE_ENV === 'development') { // if this process = 'development' then use the baseUrl
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://mern-music.herokuapp.com'
} else {
  baseUrl = 'https://mern-music.herokuapp.com'
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          // songs: [],
          // playlists: [],
        }
    }

    fetchTest = () => {
      fetch(`${baseUrl}/songs`)
      .then( res => res.json())
      .then(res => console.log(res))
      .catch( err => console.log(err))
    }

// READ // RUNS FETCHPOSTS ON LOAD
  // componentDidMount () { // once component mounts...
//   this.fetchPosts() // run the function above
// } // check components in DEV tools - Main - state - posts - Array

    render() {
        return (
            <div>
              <Header />
                <button onClick={this.fetchTest}>Fetch</button>

              <Main data={this.state.data} />
            </div>
        );
    }
}

export default App;
