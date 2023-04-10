import { bot } from '../config.js';

const isAdmin = true;

const testComp = {
	id: 0,
	name: 'Romaniolle',
	employeesCount: 54,
	employeesEnded: 27
}

const companyOptions = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text: 'Изменить информацию ℹ️', callback_data: 'changeInfo'}],
			[{text: 'Сотрудник ➕', callback_data: 'addEmployee'}, {text: 'Сотрудник ➖', callback_data: 'deleteEmployee'}],
			[{text: 'Удалить компанию 🚫', callback_data: 'deleteCompany'}]
		]
	})
};

export const cmdMyCompany = (msg) => {
	bot.sendMessage(msg.chat.id, `🏢 Моя компания \n \n Кол-во сотрудников: ${testComp.employeesCount} 🧔 \n \n Выполнили чек-лист: ${testComp.employeesEnded} ✅`, companyOptions);
};