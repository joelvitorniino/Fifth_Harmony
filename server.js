const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + './src/html/'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + './src/html/index.html');
});

app.listen(PORT, () => {
    console.log(`Servidor iniciando na porta: ${PORT}`);
});