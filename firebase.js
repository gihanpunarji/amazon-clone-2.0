var firebaseConfig = {
    apiKey: "AIzaSyCqBe80PkQakRFu02vCnag6rdglAqTObG4",
    authDomain: "clone-two-c7c44.firebaseapp.com",
    projectId: "clone-two-c7c44",
    storageBucket: "clone-two-c7c44.appspot.com",
    messagingSenderId: "968821513084",
    appId: "1:968821513084:web:c5d3991943f00cc83522f9",
    measurementId: "G-9J3L5113SP"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();