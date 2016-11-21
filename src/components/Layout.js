import React, { Component } from 'react';
import FileUpload from './FileUpload';
export default class Layout extends Component {
  constructor() {
    super();
    this.submitFile = this.submitFile.bind(this)
  }
  submitFile(file){
  
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>File Uploading</h1>
        <FileUpload submitFile={this.submitFile}/>
      </div>
    )
  }
}
