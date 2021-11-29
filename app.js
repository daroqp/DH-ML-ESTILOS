const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


/* Middleware */
const pathHome = path.resolve(__dirname, 'public')
app.use(express.static(pathHome));


/* Routing */
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
})


app.listen(port, () => {
    console.log(`Server running on port: ${port}\n http://localhost:${port}`)
})