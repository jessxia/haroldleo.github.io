const express = require('express');
const app = express();
const PORT = 8888;

app.use(express.static('./'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));