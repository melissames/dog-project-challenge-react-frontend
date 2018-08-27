import React, { Component, PropTypes } from 'react';
import { connect }  from 'react-redux';
import { editDog } from '../actions/index.js';
import { bindActionCreators } from 'redux';

const URL = 'http://localhost:3000'

class EditDoggoForm extends Component {

  state = {
    name: '',
    description: '',
    photo: ''
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    })
  }

  handlePhotoChange = e => {
    this.setState({
      photo: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    editDog(this.props.dog.id, this.state.name, this.state.description, this.state.photo)
  }

  render() {
    return(
      <div>
        <h1>Edit Your Dog</h1>
        <form onSubmit={this.handleSubmit}>
          Name:<br/>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleNameChange}/>
          <br/>
          Description:<br/>
          <input
            type='textarea'
            placeholder={this.props.dog.description}
            value={this.state.description}
            onChange={this.handleDescriptionChange}/>
          <br/>
          Image:<br/>
          <input
            type='file'
            onChange={this.handlePhotoChange}/>
          <br/>
          <img src={`${URL}/${this.props.dog.images[0]}`} alt=''/>
          <br/>
          <button>Update Dog</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dog: state.dog
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editDog: bindActionCreators(editDog, dispatch)
  }
}

export default connect(mapStateToProps)(EditDoggoForm)
