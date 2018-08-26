import React, { Component } from 'react';
import { connect }  from 'react-redux';
// import { editDog } from '../actions/index.js';
import { bindActionCreators } from 'redux';

const URL = 'http://localhost:3000'

class EditDoggoForm extends Component {

  handleSubmit = e => {
    e.preventDefault()

    console.log('CHANGE ME')
  }

  render() {
    return(
      <div>
        <h1>Edit Your Dog</h1>
        <form onSubmit={this.handleSubmit}>
          Name:<br/>
          <input type='text' name='name'/><br/>
          Description:<br/>
          <input type='textarea' placeholder={this.props.dog.description}/><br/>
          Image:<br/>
          <input type='file' /><br/>
          <img src={`${URL}/${this.props.dog.images[0]}`} alt=''/><br/>
          <button>Update Dog</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dog: state.dog,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     editDog: bindActionCreators(editDog, dispatch)
//   }
// }

export default connect(mapStateToProps)(EditDoggoForm)
