const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Правильное объявление порта

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
