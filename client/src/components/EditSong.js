import React, { Component } from 'react';

class EditSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id:this.props.editedSong.id,
          title:this.props.editedSong.title,
          artist:this.props.editedSong.artist,
          album:this.props.editedSong.album,
          genre:this.props.editedSong.genre,
        }
    }

    handleChange = (event) => {
      this.setState({
        [event.target.id] : event.target.value
      })
    }

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
                <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder={this.state.title}/>
                <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} placeholder={this.state.artist}/>
                <input type='text' id='album' value={this.state.album} onChange={this.handleChange} placeholder={this.state.album}/>
                <input type='text' id='genre' value={this.state.genre} onChange={this.handleChange} placeholder={this.state.genre}/>
                <input type='submit' value="Edit Song"/>
                <button onClick={this.props.closeEdit}>Cancel</button>
              </form>
            </div>
          </div>

        );
    }
}

export default EditSong;
