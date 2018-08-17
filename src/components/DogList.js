import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { fetchDog } from '../actions/index.js';
import { bindActionCreators } from 'redux';

const URL = 'http://localhost:3000'

class DogList extends Component {

  handleClick = () => {
    let id = this.props.dog.id.toString()
    this.props.fetchDog(id)
  }

  render() {
    return(
      <div onClick={this.handleClick}>
          <h2><a href='#'>{this.props.dog.name}</a></h2>
          <img src={`${URL}/${this.props.dog.images[0]}`} alt=''></img>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDog: bindActionCreators(fetchDog, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(DogList);
