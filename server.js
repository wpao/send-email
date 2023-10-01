const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail'); // Impor fungsi sendEmail yang telah Anda buat
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());

// Menangani permintaan GET pada rute /send-email
app.get('/send-email', (req, res) => {
    // Lakukan logika untuk mengirim email di sini
    res.send('Permintaan GET pada /send-email berhasil ditangani!');
});

// Mengirim email saat permintaan POST diterima
app.post('/send-email', async (req, res) => {
  const { recipient, subject, message } = await req.body;
  sendEmail(recipient, subject, message);
  res.json({ message: 'Email berhasil dikirim!' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
