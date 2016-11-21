import React, {Component} from 'react';

export default class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
    this.submit = this.submit.bind(this)
    this.onFileSelect = this.onFileSelect.bind(this)
  }
  submit(e) {
    e.preventDefault();
   let { file } = this.state;
   this.props.submitFile(file);
  }
  onFileSelect(e){
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
      file,
      imagePreviewUrl: reader.result
      })
    };
    reader.readAsDataURL(file);
  }
  render() {
    let { imagePreviewUrl } = this.state
    return (
      <div className='container'>
        <form onSubmit={this.submit}>
          <input type='file' onChange={this.onFileSelect} required/>
          <button>Upload</button>
        </form>
        { imagePreviewUrl && <img className="preview" src={imagePreviewUrl} />}
      </div>
    )
  }
}
