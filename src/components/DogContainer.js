import React, { Component } from 'react';
import { connect }  from 'react-redux';
import DogList from './DogList.js'
import DogDetail from './DogDetail.js'

class DogContainer extends Component {

  renderDoggos = () => {
    return this.props.allDogs.map((dog, index) => <DogList key={index} dog={dog} />)
  }

  render() {
    console.log('hello from dog container', this.props.allDogs)
    return(
      <div>
        <h1>Dog Profile Demo</h1>
        {/* {this.renderDoggos()} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allDogs: state.allDogs
  }
}

export default connect(mapStateToProps)(DogContainer);
