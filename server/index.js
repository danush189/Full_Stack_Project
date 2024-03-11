const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Update the connection URL with the correct database name
mongoose.connect("mongodb+srv://Danush:Danush12345@cluster0.u5evyv0.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.post("/", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log('Server is running');
});
