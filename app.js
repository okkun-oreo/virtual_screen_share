function load() {
  const APIKEY = 'c4a1bf8a-3aef-4d66-8391-ef153247a42c';
  // Call object
  let existingCall = null;
  // localStream
  let localStream = null;
  // Prepare screen share object
  const ss = ScreenShare.create({debug: true});

  ss.start({
    width:     640,
    height:    480,
    frameRate: 1,
    })
  .then(stream => {
    var video = document.getElementById('my-video');
    video.srcObject = stream;
    localStream = stream;
  })
  .catch(error => {
    console.log("error: " + error);
  });
}