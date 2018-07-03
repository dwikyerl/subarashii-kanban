import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: 'subarashii-kanban'
}

const firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.database()
