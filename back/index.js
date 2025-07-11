const express = require('express');

const port = 3333;
const app = express();

app.get('/', (require, request) => {
    request.send('Olá mundo');
});

app.listen(port, console.log(`porta rodando em http://localhost:${port}`))