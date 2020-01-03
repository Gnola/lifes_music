import React, { Component } from 'react';

class EditSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
          title:'',
          artist:'',
          album:'',
          genre:'',
          showEdit:false,
        }
    }

    handleEdit = (event) => {
      this.setState({
        [event.target.id] : event.target.value
      })
    }

    submitEdit = (event) => {
      event.preventDefault()
      this.props.updateSong(this.state)
    }

    render() {
        return (
            <div className="editmusic">
              <form onSubmit={this.submitEdit}>
                <input type='text' id='title' placeholder={this.props.song.title} value={this.state.title} onChange={this.handleEdit} />
                <input type='text' id='artist' placeholder={this.props.song.artist} value={this.state.artist} onChange={this.handleEdit} />
                <input type='text' id='album' placeholder={this.props.song.album} value={this.state.album} onChange={this.handleEdit} />
                <input type='text' id='genre' placeholder={this.props.song.genre} value={this.state.genre} onChange={this.handleEdit} />
                <input type='submit' value='Edit Song'/>
              </form>
            </div>
        );
    }
}

export default EditSong;
