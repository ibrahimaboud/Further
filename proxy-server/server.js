const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000', // or the specific origin where your frontend is running
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
}));

app.use(express.json());

app.post('/proxy', async (req, res) => {
    try {
        const response = await axios.post('https://hooks.zapier.com/hooks/catch/19708580/244i3ub/', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error sending data to Zapier');
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
