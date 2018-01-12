import firebase from 'firebase'

export default async function loadDB() {
  try {
    var config = {
      apiKey: "AIzaSyDFcCwKExcbowCADH5eZyzjCG1gBL7igA4",
      authDomain: "audiosurvey-51bd7.firebaseapp.com",
      databaseURL: "https://audiosurvey-51bd7.firebaseio.com",
      projectId: "audiosurvey-51bd7",
      storageBucket: "",
      messagingSenderId: "294339718190"
    };
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }
  return firebase.database().ref()
}
