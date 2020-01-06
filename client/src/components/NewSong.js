import React, { Component } from 'react';

class NewSong extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title:'',
        artist:'',
        album:'',
        // genre:'',
        energy:0,
        what:0,
        where:[],
        // mood:0,
      }
    }

    // CHANGE
    handleChange = (event) => {
      this.setState({
        [event.target.id] : (event.target.type === 'number') ? parseInt(event.target.value) : event.target.value
      })
    }

    // SUBMIT
    handleSubmit = (event) => {
      console.log(this.state);
      event.preventDefault()
      // this.props.addSong(this.state) // App.js <--- Main.js <-- AllMusic.js <- ADD SONG (using STATE)
      this.props.closeAdd() // AllMusic.js <- CLOSE ADD SONG MODAL
      this.setState({
        title:'',
        artist:'',
        album: '',
        // genre: '',
        energy:0,
        what:0,
        where:[],
        // mood:0,
      })
    }

  render() {
    return (
      <div className='add-song'>
        <form className='add-song-form' onSubmit={this.handleSubmit}>
          <div className='form-fields'>
            <label>Title <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder='Song Title'/></label>
            <label>Artist <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder='Artist'/></label>
            <label>Album <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder='Album'/></label>
            <label>Energy Level <input type='number' min="0" max='10' id='energy' value={this.state.energy} onChange={this.handleChange} /></label>
            <label>Song Weight <input type='number' min="0" max='10' id='what' value={this.state.what} onChange={this.handleChange} /></label>
          </div>
          <div className='form-buttons'>
            <input className='button-primary' type='submit' value="Add to Music"/>
            <button onClick={this.props.closeAdd}>Cancel</button>
          </div>

        </form>
      </div>
    );
  }
}

export default NewSong;

// <label>Genre<input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder='Genre'/></label>
// <label>Mood<input type='number' min="0" max='10' id='mood' value={this.state.mood} onChange={this.handleChange} /></label>

// <div className='modal-container'>
//   <div className='modals'>
//     <form className='forms' onSubmit={this.handleSubmit}>
//       <label>Song Title<input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder='Song Title'/></label>
//       <label>Artist<input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder='Artist'/></label>
//       <label>Album<input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder='Album'/></label>
//       <label>Energy Level<input type='number' min="0" max='10' id='energy' value={this.state.energy} onChange={this.handleChange} /></label>
//       <label>Song Weight<input type='number' min="0" max='10' id='what' value={this.state.what} onChange={this.handleChange} /></label>
//       <input type='submit' value="Add to Music"/>
//       <button onClick={this.props.closeAdd}>Cancel</button>
//     </form>
//   </div>
// </div>
