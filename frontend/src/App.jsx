import { useEffect } from 'react';
import './App.scss'

const tg = window.Telegram.WebApp;



function App() {

	tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
	tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
	tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
	tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
	tg.MainButton.show();

	useEffect(() => {
		tg.ready();
	}, []);

	
  return (
    <div className="App">

		
		
    </div>
  )
}

export default App;