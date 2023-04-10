import { useEffect } from 'react';
import './App.scss'
import { MainButton, BackButton } from '@vkruglikov/react-telegram-web-app';

const tg = window.Telegram.WebApp;



function App() {

	useEffect(() => {
		tg.ready();
	}, []);

  return (
    <div className="App">
		
		<BackButton text='qwe'></BackButton>
		<MainButton text='Оформить заказ'></MainButton>
    </div>
  )
}

export default App;