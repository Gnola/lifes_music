import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import music from './Data.js';

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
          data: music
        }
    }


    // fetchTest = () => {
    //   fetch(`${baseUrl}/test`)
    //   .then( res => res.json())
    //   .then(res => this.setState({
    //     data:res
    //   }))
    //   .catch( err => console.log(err))
    // }

                  // <button onClick={this.fetchTest}>Fetch</button>

    render() {
        return (
            <div>
              <Header />
              <Main data={this.state.data} />
            </div>
        );
    }
}

export default App;
