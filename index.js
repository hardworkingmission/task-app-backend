const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connectDB = require('./db/connectDB');
const tasks = require('./routes/tasks');

app.use(express.json());
app.use(cors({ origin: true }));

app.use('/api/tasks', tasks);

const start = () => {
  try {
    connectDB();
    app.listen(port, () => {
      console.log('Listenting on', port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

app.get('/', (req, res) => {
  res.send('Welcome to task app backend');
});

// error handle
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
