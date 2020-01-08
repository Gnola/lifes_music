import React, { Component } from 'react';

class EditSong extends Component {
    constructor(props) {
        super(props)
        this.state = { // fills form with original song data
          _id:this.props.editedSong._id,
          title:this.props.editedSong.title,
          artist:this.props.editedSong.artist,
          album:this.props.editedSong.album,
          where:this.props.editedSong.where,
          energy:this.props.editedSong.energy,
          weight:this.props.editedSong.weight,
          what:this.props.editedSong.what
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
            <h2><span className='edit-title'>{this.state.title} - {this.state.artist}</span></h2>
            <label>Song <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder={this.state.title}/></label>
            <label>Artist <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder={this.state.artist}/></label>
            <label>Album <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder={this.state.album}/></label>
            <label>Energy Level <input type='number' min="0" max='10' id='energy' value={this.state.energy} onChange={this.handleChange} placeholder={this.state.energy}/></label>
            <label>Song Weight <input type='number' min="0" max='10' id='weight' value={this.state.weight} onChange={this.handleChange} placeholder={this.state.weight}/></label>
            <label className='loc'>Location(s)</label>
            {this.state.where.map((playlist, index) => (<span key={index}> {playlist} </span>))}
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
// <label>Where your songs are: </label>
//   {this.state.where.map((playlist, index) => (
//     <p key={index}>{playlist}</p>
//   ))}
// <label>Genre<input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder={this.state.genre}/></label>
// <label>Mood<input type='number' min="0" max='10' id='mood' value={this.state.mood} onChange={this.handleChange} placeholder={this.state.mood}/></label>
