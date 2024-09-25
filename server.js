const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Arahkan request ke folder public untuk menyajikan file HTML
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('validateNumbers', async (numbers) => {
        for (let number of numbers) {
            // Remove all symbols (retain only digits)
            number = number.replace(/\D/g, '');
            try {
                const response = await axios.post('https://dash.pushwa.com/api/validateNumber', {
                    "token": process.env.PUSHWA_TOKEN,
                    "number" : number
                });
                console.log(`result : ${number} ${response.data.isvalid}`);
                if (response.data.status){
                    if (response.data.isvalid) {
                        socket.emit('numberValidated', { number, status: 'valid' });
                    } else {
                        socket.emit('numberValidated', { number, status: 'invalid' });
                    }
                } else {
                    socket.emit('error', { msg: response.data.message });
                    break;
                }
            } catch (error) {
                // Jika terjadi error, anggap nomor invalid
                socket.emit('numberValidated', { number, status: 'invalid' });
            }
        };
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
