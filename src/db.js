import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAgDkd0uTQ1Zw3JploTk6dLqQNPXC1ai54",
  authDomain: "my-travelmap-phi.firebaseapp.com",
  databaseURL: "https://my-travelmap-phi.firebaseio.com",
  projectId: "my-travelmap-phi",
  storageBucket: "my-travelmap-phi.appspot.com",
  messagingSenderId: "464290458046",
  appId: "1:464290458046:web:8ec93158443c01c614b1ef",
  measurementId: "G-0W7F1JGL2H"

}

export const db = firebase.initializeApp(firebaseConfig).firestore
// This is not always necessary
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
