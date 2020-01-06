import React, { Component } from 'react';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='info'>
              <h1>How it works</h1>
              <h4>Describes how everything works and introduce the new song form</h4>
            </div>
        );
    }
}

export default Info;
