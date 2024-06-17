const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password, displayName: username });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Log In
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Implement log in with Firebase Authentication SDK
  // This is usually handled client-side for email/password
});

module.exports = router;
