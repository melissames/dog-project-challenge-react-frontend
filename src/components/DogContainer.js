import React, { Component } from 'react';
import { connect }  from 'react-redux';
import DogList from './DogList.js';
import DogDetail from './DogDetail.js';


class DogContainer extends Component {

  renderDoggos = () => {
    return this.props.allDogs.map((dog, index) => <DogList key={index} dog={dog} />)
  }

  render() {
    return(
      <div>
        <h1><a href='http://localhost:3001/'>Dog Profile Demo</a></h1>
        {this.props.dog ? (this.props.loading ? <DogDetail /> : null) : this.renderDoggos()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allDogs: state.allDogs,
    dog: state.dog,
    loading: state.dogLoading
  }
}

export default connect(mapStateToProps)(DogContainer);
