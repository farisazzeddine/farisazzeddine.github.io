import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZMPDAo43OOApg9LXmyVURateHV7sVKbE",
    authDomain: "myprotofolio-afce9.firebaseapp.com",
    databaseURL: "https://myprotofolio-afce9.firebaseio.com",
    projectId: "myprotofolio-afce9",
    storageBucket: "myprotofolio-afce9.appspot.com",
    messagingSenderId: "102521091169",
    appId: "1:102521091169:web:d00832750909aaa076a620",
    measurementId: "G-M9B8SNXXQP"
  }
  // Initialize Firebase
  firebase.analytics();
  

  class firebase {
      constructor(){
         app.initializeApp(firebaseConfig);
         this.auth = app.auth()
         this.db = app.firestore() 
      }
      login(email, password){
          return this.auth.signInWithEmailAndPassword(email, passowrd)
      }
      logout(){
          return this.auth.signOut()
      }
      async register(name, email, passowrd){
          await this.auth.createUserWithEmailAndPassword(email, password)
          return this.auth.currentUser.updateProfile({
              displayName:  name
          })
      }
  }
  export default new Firebase()