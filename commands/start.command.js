import { bot } from '../config.js';

const webAppUrl = 'https://127.0.0.1:5173/';


export const cmdStart = (msg) => {
	bot.sendMessage(msg.chat.id, 'Ниже появится кнопка, заполни форму', {
		reply_markup: {
			inline_keyboard: [
				[{text: 'Сделать заказ 🛒', web_app: {url: webAppUrl}}]
			]
		}
	})
};