const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();

let result = "";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    return res.send("Hello, World");
});

app.post('/', (req, res) => {
    result = req.body;

    return res.send(result);
});

app.get('/result', (req, res) => {
    return res.send(result);
});