import React, { Component } from 'react';

class EditSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id:this.props.editedSong.id,
          title:this.props.editedSong.title,
          artist:this.props.editedSong.artist,
          album:this.props.editedSong.album,
          // genre:this.props.editedSong.genre,
          energy:this.props.editedSong.energy,
          what:this.props.editedSong.what,
          // mood:this.props.editedSong.mood
        }
    }


    // CHANGE
    handleChange = (event) => {
      this.setState({
        [event.target.id] : event.target.value
      })
    }
    // SUBMIT
    handleSubmit = (event) => {
      event.preventDefault()
      this.props.updateSong(this.state)
      this.props.closeEdit()
    }


  render() {
    return (
      <div className='modal-container'>
        <div className='edit-song-modal'>
          <form className='edit-song-form' onSubmit={this.handleSubmit}>
            <label>Song Title<input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder={this.state.title}/></label>
            <label>Artist<input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder={this.state.artist}/></label>
            <label>Album<input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder={this.state.album}/></label>
            <label>Energy Level<input type='number' min="0" max='10' id='energy' value={this.state.energy} onChange={this.handleChange} placeholder={this.state.energy}/></label>
            <label>Song Weight<input type='number' min="0" max='10' id='what' value={this.state.what} onChange={this.handleChange} placeholder={this.state.what}/></label>
            <input type='submit' value="Edit Song"/>
            <button onClick={this.props.closeEdit}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditSong;

// <label>Genre<input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder={this.state.genre}/></label>

// <label>Mood<input type='number' min="0" max='10' id='mood' value={this.state.mood} onChange={this.handleChange} placeholder={this.state.mood}/></label>
