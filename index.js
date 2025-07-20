import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Test route
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Railway!' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
