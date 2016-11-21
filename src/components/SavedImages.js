import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({ images:state.images}), dispatch => ({
  upload(file) {
   dispatch(upload(file));
  }
}))
export default class SavedImages extends Component {
  constructor(){
  super()
  this.state = {
  images: this.props.images
  }
  }
  render() {
    let Images = images.map( (image,i) => (<img key={i} src={image.url}/>))
    return (
      <div >
        {Images}
      </div>
    )
  }
}
