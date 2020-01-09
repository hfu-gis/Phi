import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDQmbeCTe9hoIzTaytO68GTRQkxhgUuuRI",
  authDomain: "phi-2-64896.firebaseapp.com",
  databaseURL: "https://phi-2-64896.firebaseio.com",
  projectId: "phi-2-64896",
  storageBucket: "phi-2-64896.appspot.com",
  messagingSenderId: "905846599476",
  appId: "1:905846599476:web:74166c5b07cfa21c913f61",
  measurementId: "G-R4X80FCK1M"
};

const db = firebase.initializeApp(firebaseConfig).firestore()
export default db
//console.log(db)
// This is not always necessary
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }


