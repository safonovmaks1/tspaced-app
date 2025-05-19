require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const path = require('path');

const port = 3001;
const app = express();
const corsOptions = {
	origin: 'http://localhost:5173',
};

app.use(express.static(path.resolve('..', 'client', 'dist')));

app.use(cookieParser(), express.json(), cors(corsOptions));

app.use('/api', routes);

app.get(/(.*)/, (req, res) => {
	res.sendFile(path.resolve('..', 'client', 'dist', 'index.html'));
});

mongoose
	.connect(process.env.DB_CONNECTION_STRING)
	.then(() => {
		app.listen(port, () => {
			console.log(`Server started on port ${port}`);
		});
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('MongoDB connection error:', err));
