import React, { Component } from 'react';

class NewSong extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title:'',
        artist:'',
        album:'',
        where:[],
        energy:5,
        weight:5,
        what:5,
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
      event.preventDefault()
      // console.log(this.state);
      this.props.addSong(this.state) // App.js <--- Main.js <-- AllMusic.js <- ADD SONG (using STATE)
      // this.props.closeAdd() // AllMusic.js <- CLOSE ADD SONG MODAL
      this.setState({
        title:'',
        artist:'',
        album:'',
        where:[],
        energy:5,
        weight:5,
        what:5,
      })
    }

  render() {
    return (
      <div className='add-song-div'>
        <form className='add-song-form' onSubmit={this.handleSubmit}>
          <div className='form-fields'>
            <label className='add-song-label' >Title <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder='Song Title'/></label>
            <label className='add-song-label' >Artist <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder='Artist'/></label>
            <label className='add-song-label' >Album <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder='Album'/></label>
            <label className='add-song-label' >Energy Level <input type='number' min="0" max='10' id='energy' value={this.state.energy} onChange={this.handleChange} /></label>
            <label className='add-song-label' >Song Weight <input type='number' min="0" max='10' id='weight' value={this.state.weight} onChange={this.handleChange} /></label>
            <input className='button-primary' type='submit' value="Add to Music"/>
          </div>

        </form>
      </div>
    );
  }
}

export default NewSong;
// <div className='form-buttons'>
// </div>

// <label>Optional 3rd rank <input type='number' min="0" max='10' id='what' value={this.state.what} onChange={this.handleChange} /></label>


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
