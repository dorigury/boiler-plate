const express = require('express');
const app = express();
const port = 8080;

//mongodb+srv://<username>:<password>@boilerplate.qbup0iw.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://johnahn:abcd1234@boilerplate.qbup0iw.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate', {})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(`Could not connect to MongoDB : ${err}`));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});