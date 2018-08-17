import React, { Component } from 'react';
import { connect }  from 'react-redux';
import Slider from "react-slick";

const URL = 'http://localhost:3000'

class DogDetail extends Component {

  renderDoggoPics = () => {
    return this.props.dog.images.map((image, index) => <div><img id={index} src={`${URL}${image}`} alt=''></img></div>)
    console.log(this.props.dog.images)
  }

  render() {
    let settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    console.log(this.props.dog)
    return(
      <div>
        <h2>{this.props.dog.name}</h2>
        {this.props.dog.images.length > 1 ?
          <Slider {...settings}>
            {this.renderDoggoPics()}
          </Slider>
        : <img src={`${URL}${this.props.dog.images[0]}`} alt=''></img>}
        {/* fix slider so that it works when it is >1 */}
        <p>{this.props.dog.description}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dog: state.dog
  }
}

export default connect(mapStateToProps)(DogDetail);
