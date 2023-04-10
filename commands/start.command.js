import { bot } from '../config.js';

const webAppUrl = 'https://rad-kataifi-665763.netlify.app';


export const cmdStart = (msg) => {
	bot.sendMessage(msg.chat.id, 'Ниже появится кнопка, заполни форму', {
		reply_markup: {
			inline_keyboard: [
				[{text: 'Сделать заказ 🛒', web_app: {url: webAppUrl}}]
			]
		}
	})
};