const req = require('express/lib/request');
const router = require('express')
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
})

// Turn on camera
let camera = document.querySelector("#camera");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ camera: true })
      .then(function (stream) {
        camera.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Error");
      });
  }
