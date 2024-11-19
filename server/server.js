const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello there!!!!");
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`App is running at: http://localhost:${PORT}`);
});