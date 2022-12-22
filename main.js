Webcam.set({
    width:300,
    height:310,
    image_format : 'png',
    png_quaity:90
  });
  
  
  camera = document.getElementById("camera");
  
  Webcam.attach( '#camera' );
  
  function take_snapshot()
  {
      webcam.snap(function(data_uri) {
          document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
      });
  }
  
  console.log('ml5 vession:', ml5.version);
  
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VLjjcVLhc/',modelLoaded);
  
  function modelLoaded()  {
      console.log('Model Loaded!');
  }
  
  function speak(){
      var synth = window.speechSynthesis;
      var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
      synth.speak(utterThis);
  }