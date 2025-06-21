require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const path = require('path');
const os = require('os');

const port = process.env.PORT || 3001;

const app = express();
const corsOptions = {
	origin: 'http://localhost:5173',
	credentials: true,
	allowedHeaders: ['Content-Type', 'Authorization'],
};

const fs = require('fs');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
	fs.mkdirSync(uploadsDir);
}

app.use(express.static(path.resolve('..', 'client', 'dist')));

app.use(cookieParser(), express.json(), cors(corsOptions));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', routes);

app.get(/(.*)/, (req, res) => {
	res.sendFile(path.resolve('..', 'client', 'dist', 'index.html'));
});

// Функция для получения локального IP
function getLocalIp() {
	const interfaces = os.networkInterfaces();
	for (const name of Object.keys(interfaces)) {
		for (const iface of interfaces[name]) {
			if (iface.family === 'IPv4' && !iface.internal) {
				return iface.address;
			}
		}
	}
	return 'localhost';
}

mongoose
	.connect(process.env.DB_CONNECTION_STRING)
	.then(() => {
		console.log('Connected to MongoDB');

		const server = app.listen(port, '0.0.0.0', () => {
			console.log(`Server running on port ${port}`);
			console.log(`Local access: http://localhost:${port}`);
			console.log(`Phone access: http://${getLocalIp()}:${port}`);
		});

		server.on('error', (err) => {
			console.error('Server error:', err);
		});
	})
	.catch((err) => console.error('MongoDB connection error:', err));
