var firebaseConfig = {
    apiKey: "AIzaSyDfE2Tz1ZoOAoVhh_Jfk2F4TEjLK7xqTUs",
    authDomain: "clone-8ca72.firebaseapp.com",
    projectId: "clone-8ca72",
    storageBucket: "clone-8ca72.appspot.com",
    messagingSenderId: "455267756153",
    appId: "1:455267756153:web:3ecf6bb92eeddf64fe0ca8",
    measurementId: "G-R2E1L86GC8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();