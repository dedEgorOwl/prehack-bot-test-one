import { useEffect } from 'react';
import './App.scss'
import { MainButton, ThemeParams } from '@vkruglikov/react-telegram-web-app';

const tg = window.Telegram.WebApp;



function App() {

	let prms;

	useEffect(() => {
		prms = ThemeParams;
		tg.ready();
	}, []);

	
  return (
    <div className="App">
		
		
		<MainButton text='Оформить заказ'></MainButton>
    </div>
  )
}

export default App;