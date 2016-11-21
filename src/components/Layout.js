import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileUpload from './FileUpload';
import SavedImages from './SavedImages'
import { upload } from '../actions/ImageActions'

@connect(null, dispatch => ({
  upload(file) {
   dispatch(upload(file));
  }
}))
export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>File Uploading</h1>
        <FileUpload submitFile={this.props.upload}/>
        <div className='imgDisplay'>
          {/* <SavedImages /> */}
        </div>
      </div>

    )
  }
}
