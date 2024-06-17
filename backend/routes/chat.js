const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

const db = admin.firestore();

router.get('/:roomId', async (req, res) => {
  const { roomId } = req.params;
  try {
    const messagesRef = db.collection('chatRooms').doc(roomId).collection('messages');
    const snapshot = await messagesRef.orderBy('timestamp').get();
    const messages = snapshot.docs.map(doc => doc.data());
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:roomId', async (req, res) => {
  const { roomId } = req.params;
  const { user, message } = req.body;
  try {
    await db.collection('chatRooms').doc(roomId).collection('messages').add({
      user,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.status(201).send('Message sent');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
