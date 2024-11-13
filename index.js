const express = require('express');
const app = express();
const port = 3000;

// Servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para sumar dos números
app.get('/sum', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers.' });
    }

    const sum = num1 + num2;
    res.json({ result: sum });
});

app.listen(port, () => {
    console.log(`Server running`);
});