import { useEffect } from 'react';
import './App.scss'

const tg = window.Telegram.WebApp;



function App() {

	tg.MainButton.text = "Заказать";
	tg.MainButton.textColor = --tg-theme-button-text-color;
	tg.MainButton.color = --tg-theme-button-color;
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