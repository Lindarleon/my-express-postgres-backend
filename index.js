import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ message: 'Express + Railway backend is working!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
