import axios from 'axios';

export function upload(file) {
    let data = new FormData();
    data.append('myfile', file);
    return {
      type: 'FILE_UPLOAD',
      payload: axios.post('/api/images', data).then(res => res.data)
    }
  }

export function uploadSuccess(image) {
    return {
      type: 'UPLOAD_SUCCESS',
      payload: image
    }
}

export function receiveImages(images) {
  return { type: 'RECEIVE_IMAGES_SUCCESS', payload: images }
}

export function getImages() {
  return dispatch => {
    get('/api/images').then(res => res.data).then( images => {
      dispatch(receiveImages(images))
    }).catch(error => {
      console.log('error')
    })
  }
}
