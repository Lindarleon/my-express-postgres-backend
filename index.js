const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// --- Test Route ---
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Railway!' });
});

// --- Login Route ---
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 🔐 Simple dummy authentication
  if (username === 'admin' && password === '1234') {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

// --- Start the server ---
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
