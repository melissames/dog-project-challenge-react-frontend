import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from "react-slick";
import { editDogForm } from '../actions/index.js';

const URL = 'http://localhost:3000'

class DogDetail extends Component {

  handleEditClick = () => {
    this.props.editDogForm()
  }

  handleDeleteClick = () => {
    console.log('noooooooo let me live')
  }

  renderDoggoPics = () => {
    return this.props.dog.images.map((image, index) => <div><img id={index} src={`${URL}${image}`} alt=''/></div>)
  }

  render() {
    let settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return(
      <div>
        <h2>{this.props.dog.name}</h2>
        {this.props.dog.images.length > 1 ?
          <Slider {...settings}>
            {this.renderDoggoPics()}
          </Slider>
        : <img src={`${URL}${this.props.dog.images[0]}`} alt=''/>}
        <p>{this.props.dog.description}</p>
          <button onClick={this.handleEditClick}>Edit {this.props.dog.name}'s Profile</button>
          <br/>
          <button onClick={this.handleDeleteClick}>Delete {this.props.dog.name}'s Profile</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dog: state.dog,
    editDog: state.editDog
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editDogForm: bindActionCreators(editDogForm, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DogDetail);
