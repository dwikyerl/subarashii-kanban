import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  databaseURL: 'https://subarashii-kanban.firebaseio.com',
  projectId: 'subarashii-kanban'
}

const firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.database()
