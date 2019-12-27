import firebase from "firebase";

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyAYjkZ0pYJv196Xh6LKvM7IiO5dg1RQvDE",
        authDomain: "my-chat-app-81650.firebaseapp.com",
        databaseURL: "https://my-chat-app-81650.firebaseio.com",
        projectId: "my-chat-app-81650",
        storageBucket: "my-chat-app-81650.appspot.com",
        messagingSenderId: "180323464777"
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;
