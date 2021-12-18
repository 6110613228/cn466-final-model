const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

var model;
async function model() {
  model = await tf.loadLayersModel('file://./save_model_js/model.json');

  var image;
  var resize_image;
  fs.readFile('sky_test.jpg', async (error, data) => {
    image = tf.node.decodeImage(data);
    resize_image = image.resizeBilinear([256, 256]);
    let expanddim_image = resize_image.expandDims(0);
    console.log(expanddim_image.shape);

    let predict = model.predict(expanddim_image);

    let result = await predict.data();

    let tf_result = tf.tensor1d(result);

    // ['Clear', 'Cloudy', 'Night']
    console.log(tf_result.argMax().dataSync()[0]);
  });
}

model();
