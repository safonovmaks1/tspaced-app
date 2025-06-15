require('dotenv').config();
const express = require('express');

const router = express.Router({ mergeParams: true });

router.post('/send-to-telegram', async (req, res) => {
	try {
		const { name, phone, message, messenger } = req.body;
		const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
		const chatId = process.env.TELEGRAM_CHAT_ID;

		const text = `
			📌 Новая заявка:
			👤 Имя: ${name}
			📞 Телефон: ${phone}
			💬 Мессенджер: ${messenger}
			✉️ Сообщение: ${message}
    	`;

		const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

		const response = await fetch(telegramUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text: text,
				parse_mode: 'Markdown',
			}),
		});

		const result = await response.json();

		if (!response.ok) {
			throw new Error(result.description || 'Ошибка Telegram API');
		}

		res.status(200).json({ success: true });
	} catch (error) {
		console.error('Telegram error:', error);
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
