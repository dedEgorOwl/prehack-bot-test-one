import { bot } from '../config.js';

export const cmdInfo = async (msg) => {
	await bot.sendMessage(msg.chat.id, 'Создатель:');
	await bot.sendMessage(msg.chat.id, 'deadinside✓emo✓goth✓drain✓epileptic✓paranoid✓toxic✓bipolar✓depressed✓tilted✓antisocial✓sad✓broken✓godovikova');
	await bot.sendSticker(msg.chat.id, 'CAACAgIAAxkBAAICn2QzTOrqbJiDwqddhmXKZZ5HeRCXAAI4EwACbOHQS1crmVOFTAVXLwQ');
};