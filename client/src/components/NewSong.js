import React, { Component } from 'react';

class NewSong extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title:'',
        artist:'',
        album:'',
        genre:'',
      }
    }

    handleChange = (event) => {
      this.setState({
        [event.target.id] : event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.addSong(this.state)
      this.setState({
        title:'',
        artist:'',
        album: '',
        genre: '',
      })
    }

  render() {
    return (
      <div>
        <form className='add-music' onSubmit={this.handleSubmit}>
          <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder='Song Title'/>
          <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder='Artist'/>
          <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder='Album'/>
          <input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder='Genre'/>
          <input type='submit' value="Add to Music"/>
        </form>
      </div>
    );
  }
}

export default NewSong;
