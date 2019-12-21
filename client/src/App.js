import React, { Component } from 'react';
import Test from './Test.js';

let baseUrl = '';

if (process.env.NODE_ENV === 'development') { // if this process = 'development' then use the baseUrl
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://mern-music.herokuapp.com'
} else {
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://mern-music.herokuapp.com'
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data:[]
        }
    }


    fetchTest = () => {
      fetch(`${baseUrl}/test`)
      .then( res => res.json())
      .then(res => this.setState({
        data:res
      }))
      .catch( err => console.log(err))
    }

    render() {
      console.log(this.state.data);
        return (
            <div>
              {this.state.data.map((item) => (
                <Test data={item}/>
              ))}

              <button onClick={this.fetchTest}>Fetch</button>
            </div>
        );
    }
}

export default App;
