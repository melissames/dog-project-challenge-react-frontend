import React, { Component } from 'react';

class DogDetail extends Component {

  render() {
    console.log(this.props.info)
    return(
      <div>
        HEYO DETAILS
      </div>
    )
  }
}

export default DogDetail;
