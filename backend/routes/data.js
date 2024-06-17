const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // Example route to fetch data from Firestore
  router.get('/', async (req, res) => {
    try {
      const snapshot = await db.collection('messages').get(); // Replace 'your-collection' with your actual Firestore collection name
      const data = snapshot.docs.map(doc => doc.data());
      res.json(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  return router;
};
