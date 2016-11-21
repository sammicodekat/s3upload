const Bucket = 'image-upload-codinghouse-test';
const AWS_BASE = 'https://s3.amazonaws.com';
const mongoose = require('mongoose');
const uuid = require('uuid');
const path = require('path');
const aws = require('aws-sdk');
const s3 = new aws.S3();

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  Key: {
    type: String,
    required: true
  }
});

imageSchema.statics.upload = function (fileObj) {
  return new Promise((resolve, reject) => {
    let {buffer, originalname} = fileObj;
    let Key = uuid() + path.extname(originalname);
    let params = {
      Bucket,
      Key,
      ACL: 'public-read',
      Body: buffer
    }
    s3.putObject(params, err => {
      if (err)
        return reject(err);
      let url = `${AWS_URL_BASE}/${Bucket}/${Key}`
      this.create({
        url,
        Key,
        name: originalname
      }, (err, imageDoc) => {
        if (err)
          return reject(err);
        resolve(imageDoc)
      })
    })
  })
}
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
