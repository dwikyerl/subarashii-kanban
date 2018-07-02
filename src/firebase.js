import { initializeApp } from 'firebase'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  databaseURL: 'https://subarashii-kanban.firebaseio.com',
  projectId: 'subarashii-kanban'
}

const firebaseApp = initializeApp(config)
const db = firebaseApp.database()

export default db
