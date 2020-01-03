import React, { Component } from 'react';

class NewSong extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title:'',
        artist:'',
        album:'',
        genre:'',
        mood:'',
        energy:'',
        where:'',
        what:'',
      }
    }

    handleChange = (event) => {
      this.setState({
        [event.target.id] : event.target.value,
      })
    }


    handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state);
      this.props.addSong(this.state)
      this.props.closeAdd()
      this.setState({
        title:'',
        artist:'',
        album: '',
        genre: '',
        mood:'',
        energy:'',
        where:'',
        what:'',
      })
    }

  render() {
    return (
      <div className='modal-container'>
        <div className='new-song-modal'>
          <form className='new-song-form' onSubmit={this.handleSubmit}>
            <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder='Song Title'/>
            <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder='Artist'/>
            <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder='Album'/>
            <input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder='Genre'/>
            <input type='text' id='mood' value={this.state.mood} onChange={this.handleChange} placeholder='Sad, Happy or Between'/>
            <input type='text' id='energy' value={this.state.energy} onChange={this.handleChange} placeholder='Low, Medium or High'/>
            <input type='text' id='where' value={this.state.where} onChange={this.handleChange} placeholder='Home, Driving or Outside'/>
            <input type='text' id='what' value={this.state.what} onChange={this.handleChange} placeholder='Relaxed, Busy or Active'/>
            <input type='submit' value="Add to Music"/>
            <button onClick={this.props.closeAdd}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewSong;
