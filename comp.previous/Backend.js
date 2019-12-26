// import firebase from "firebase";
// import { getProvidesAudioData } from "expo/build/AR";
// import { useCallback } from "react";

// class Backend {
//   uid = "";
//   messagesRef = null;
//   //initialized my firebase Backend

//   constructor() {
//     firebase.initializeApp({
//       apiKey: "AIzaSyAYjkZ0pYJv196Xh6LKvM7IiO5dg1RQvDE",
//       authDomain: "my-chat-app-81650.firebaseapp.com",
//       databaseURL: "https://my-chat-app-81650.firebaseio.com",
//       projectId: "my-chat-app-81650",
//       storageBucket: "my-chat-app-81650.appspot.com",
//       messagingSenderId: "180323464777",
//       appId: "1:180323464777:web:8ed10f9ddf8fb02deb3198"
//     });
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         this.setUid(user.uid);
//       } else {
//         firebase
//           .auth()
//           .signInAnonymously()
//           .catch(error => {
//             alert(error.message);
//           });
//       }
//     });
//   }

//   setUid(value) {
//     this.uid = value;
//   }
//   getUid() {
//     return this.uid;
//   }

//   //retrieve the message from the Backend
//   loadMessages(callback) {
//     this.messagesRef = firebase.database().ref("messages");
//     this.messagesRef.off();
//     const onReceive = data => {
//       const message = data.val();
//       callback({
//         _id: data.key,
//         text: message.text,
//         createdAt: new Date(message.createdAt),
//         user: {
//           _id: message.user._id,
//           name: message.user.name
//         }
//       });
//     };
//     this.messagesRef.limitToLast(20).on("child_added", onReceive);
//   }

//   //send the message to the Backend
//   sendMessage(message) {
//     for (let i = 0; i < message.length; i++) {
//       this.messagesRef.push({
//         text: this.message[i].text,
//         user: this.message[i].user,
//         createdAt: firebase.database.ServerValue.TIMESTAMP,
//       });
//     }
//   }

//   //close the connection to  the Backend
//   closeChat() {
//     if (this.messagesRef) {
//       this.messagesRef.off();
//     }
//   }
// }

// export default new Backend();
