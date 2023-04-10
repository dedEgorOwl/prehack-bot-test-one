import { bot } from './config.js';
import { cmdStart } from './commands/start.command.js';
import { cmdInfo }from './commands/info.command.js';
import { cmdRate } from './commands/rate.command.js';
import { cmdMyCompany } from './commands/myCompany.command.js';

bot.on('message', (msg) => {
	console.log(msg)
	switch(msg.text) {
		case '/start':
			cmdStart(msg);
			break;
		case '/info':
			cmdInfo(msg);
			break;
		case '/rate':
			cmdRate(msg);
			break;
		case '/mycomp':
			cmdMyCompany(msg);
			break;
		default:
			bot.sendMessage(msg.chat.id, 'Я не понял, попробуй ещё раз!');
			break;
	};
});