import firebase from "firebase";

export default class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }
  
  init = () =>
  firebase.initializeApp({
    apiKey: "AIzaSyAYjkZ0pYJv196Xh6LKvM7IiO5dg1RQvDE",
    authDomain: "my-chat-app-81650.firebaseapp.com",
    databaseURL: "https://my-chat-app-81650.firebaseio.com",
    projectId: "my-chat-app-81650",
    storageBucket: "my-chat-app-81650.appspot.com",
    messagingSenderId: "180323464777"
  });

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get ref() {
    return firebase.database().ref("messages");
  }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on("child_added", snapshot => callback(this.parse(snapshot)));

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;

    const timestamp = new Date(numberStamp);

    const message = {
      _id,
      timestamp,
      text,
      user
    };
    return message;
  };

  off() {
    this.ref.off();
  }
 
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  
  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
     
      const message = {
        text,
        user,
        timestamp: this.timestamp
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

}
Fire.shared = new Fire();
