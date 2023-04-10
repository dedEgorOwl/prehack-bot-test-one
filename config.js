import TelegramBot from 'node-telegram-bot-api';
import mysql from 'mysql';

const TOKEN = '6239938074:AAEPz7FuDCj-tb7wMESu-W0zmLl1beJtn2A';

const initConn = () => {
	const conn = mysql.createConnection({
		host: '62.109.22.8',
		user: 'phpmyadmin',
		password: 'P0hpmyadmin3211',
		database: 'leb-test1'
	});
	conn.connect((err) => {
		if (err) {
			return console.log(`couldn't connect to db`);
		}
		return console.log('connected to db');
	});
	return conn;
};
export const connection = initConn();


export const bot = new TelegramBot(TOKEN, { polling: true });
bot.setMyCommands([
	{command: '/start', description: 'Открыть магазин'},
	{command: '/info', description: 'Информация о создателе'},
	{command: '/rate', description: 'Оценка'},
	{command: '/mycomp', description: 'Моя компания'}
]);

