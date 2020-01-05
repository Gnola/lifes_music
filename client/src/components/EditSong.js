import React, { Component } from 'react';

class EditSong extends Component {
    constructor(props) {
        super(props)
        this.state = { // fills form with original song data
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
      this.props.updateSong(this.state) // App.js <--- Main.js <-- AllMusic.js <- UPDATE SONG (using STATE)
      this.props.closeEdit() // AllMusic.js <- CLOSE MODAL
    }


  render() {
    return (
      <div className='modal-container'>
        <div className='modals'>
          <form className='forms' onSubmit={this.handleSubmit}>
            <label>Song <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder={this.state.title}/></label>
            <label>Artist <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder={this.state.artist}/></label>
            <label>Album <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder={this.state.album}/></label>
            <label>Energy Level <input type='number' min="0" max='10' id='energy' value={this.state.energy} onChange={this.handleChange} placeholder={this.state.energy}/></label>
            <label>Song Weight <input type='number' min="0" max='10' id='what' value={this.state.what} onChange={this.handleChange} placeholder={this.state.what}/></label>
            <div className='form-buttons'>
              <input className='button-primary' type='submit' value="Edit"/>
              <button onClick={this.props.closeEdit}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditSong;

// <label>Genre<input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder={this.state.genre}/></label>
// <label>Mood<input type='number' min="0" max='10' id='mood' value={this.state.mood} onChange={this.handleChange} placeholder={this.state.mood}/></label>
