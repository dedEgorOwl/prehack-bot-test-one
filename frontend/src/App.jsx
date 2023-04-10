import { useEffect } from 'react';
import './App.scss'

const tg = window.Telegram.WebApp;



function App() {

	tg.MainButton.text = "Заказать";
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