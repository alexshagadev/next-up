const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
