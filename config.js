const admin = require('firebase-admin');

const serviceAccount = require('./personal-portfolio-c3523-firebase-adminsdk-rawu9-c1a25affb5.json'); // Replace with the path to your service account key file

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://personal-portfolio-c3523-default-rtdb.asia-southeast1.firebasedatabase.app" // Add your databaseURL if needed
};

// Initialize Firebase Admin SDK
admin.initializeApp(firebaseConfig);

const db = admin.firestore();
const Users = db.collection('Users'); // Corrected variable name 'Users'

module.exports = Users;
