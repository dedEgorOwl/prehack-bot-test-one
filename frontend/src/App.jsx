import { useEffect } from 'react';
import './App.scss'

const tg = window.Telegram.WebApp;



function App() {

	tg.MainButton.text = "Заказать";
	tg.MainButton.textColor = "#F55353";
	tg.MainButton.color = "#143F6B";
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