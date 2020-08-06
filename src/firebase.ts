import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (process.env.FIREBASE_CONFIG) {
  firebase.initializeApp(JSON.parse(process.env.FIREBASE_CONFIG))
} else {
  console.warn('FIREBASE_CONFIG が未設定です')
}

export { firebase }
