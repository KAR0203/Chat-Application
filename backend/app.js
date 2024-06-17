const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

const app = express();
const PORT = process.env.PORT || 5000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://real-time-chat-applicati-622e6-default-rtdb.firebaseio.com/' // Update with your database URL
});

const db = admin.firestore();

app.use(express.json());

const authRoute = require('./routes/auth');
const chatRoute = require('./routes/chat');
const dataRoute = require('./routes/data')(db);

app.use('/api/auth', authRoute);
app.use('/api/chat', chatRoute);
app.use('/api/data', dataRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

