import{ initializeApp } from 'firebase/app'      
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyAwtfkYNMElyrWLYYzCTDOSYqMucwn4zwI",
    authDomain: "javascript-section16.firebaseapp.com",
    projectId: "javascript-section16",
    storageBucket: "javascript-section16.appspot.com",
    messagingSenderId: "195981413411",
    appId: "1:195981413411:web:d749a983d95239dc007596"
  };

  initializeApp(firebaseConfig) 

  const db = getFirestore()

//const auth = getAuth()

//collection Ref
const colRef = collection(db, 'chats')

//get collection data
getDocs(colRef)
  .then((snapshot)=> {
      console.log(snapshot.docs)
  })