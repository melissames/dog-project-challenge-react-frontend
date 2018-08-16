import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { fetchAllDogs } from './actions/index.js';
import { bindActionCreators } from 'redux'
import DogContainer from './components/DogContainer.js'

class App extends Component {

  componentDidMount () {
    this.props.fetchAllDogs()
  }

  render() {
    return (
      <div>
        {this.props.loading ? <DogContainer /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllDogs: bindActionCreators(fetchAllDogs, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
