import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      console.log(this.props.data);
        return (
            <div>
              <h1>{this.props.data.name} - {this.props.data.des}</h1>
            </div>
        );
    }
}

export default Test;
