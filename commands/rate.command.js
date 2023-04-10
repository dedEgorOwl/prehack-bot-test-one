import { bot, connection } from '../config.js';

const rateOptionsDefault = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text: '👍', callback_data: 'liked'}, {text: '👎', callback_data: 'disliked'}],
		]
	})
};

const rateOptionsAfter = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text: 'Посмотреть рейтинг', callback_data: 'show'}]
		]
	})
};

const calcRating = (res) => {
	let liked = 0;
	let disliked = 0;
	res.map((user) => {
		if (user.rating === 1) liked += 1;
		if (user.rating === 0) disliked += 1;
	});
	const percentage = liked / (disliked + liked) * 100;
	return `Рейтинг ${percentage}% ⭐️`;
};

export const cmdRate = (msg) => {
	bot.sendMessage(msg.chat.id, 'Оцените магазин 💅', rateOptionsDefault);
};

bot.on('callback_query', async (msg) => {
	switch (msg.data) {
		case 'liked':
			await bot.editMessageText('ХAРОШ 💀💀💀', {chat_id: msg.message.chat.id, message_id: msg.message.message_id}, rateOptionsAfter);
			bot.editMessageReplyMarkup(rateOptionsAfter.reply_markup, {
				chat_id: msg.message.chat.id,
				message_id: msg.message.message_id
			});
			break;
		case 'disliked':
			await bot.editMessageText('🈹🈵🈲🈹🈵🈹⁉️', {chat_id: msg.message.chat.id, message_id: msg.message.message_id}, rateOptionsAfter);
			bot.editMessageReplyMarkup(rateOptionsAfter.reply_markup, {
				chat_id: msg.message.chat.id,
				message_id: msg.message.message_id
			});
			break;
		case 'show':
				connection.query('SELECT * FROM users', async (err, res, fields) => {
				const callBackTxt = calcRating(res);
				await bot.editMessageText(callBackTxt, {chat_id: msg.message.chat.id, message_id: msg.message.message_id});
			});
			
			break;
		default:
			console.log('undefined callback')
			break;
	};
});