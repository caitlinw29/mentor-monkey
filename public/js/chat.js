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
