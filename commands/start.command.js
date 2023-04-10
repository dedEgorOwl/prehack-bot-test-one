import { bot } from '../config.js';

const webAppUrl = 'https://dzen.ru';


export const cmdStart = (msg) => {
	bot.sendMessage(msg.chat.id, 'Ниже появится кнопка, заполни форму', {
		reply_markup: {
			inline_keyboard: [
				[{text: 'Сделать заказ 🛒', web_app: {url: webAppUrl}}]
			]
		}
	})
};