import React, { Component } from 'react';

class DogList extends Component {

  render() {
    return(
      <div onClick={this.props.handleClick}>
          <h2><a href='#'>{this.props.info.name}</a></h2>
          {/* image to go here, need to convert from active storage blob */}
      </div>
    )
  }
}

export default DogList;
