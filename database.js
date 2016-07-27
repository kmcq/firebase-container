const firebase = require("firebase")

const config = {
  apiKey: "api-key",
  authDomain: "domain",
  databaseURL: "database-url",
  storageBucket: "storage",
}

firebase.initializeApp(config)

const database = firebase.database()
export default database
