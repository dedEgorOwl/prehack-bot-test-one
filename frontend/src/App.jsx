import { useEffect } from 'react';
import './App.scss'
import { MainButton } from '@vkruglikov/react-telegram-web-app';

const tg = window.Telegram.WebApp;



function App() {

	useEffect(() => {
		tg.ready();
	}, []);

  return (
    <div className="App">
		<MainButton text='Hello, huiton'></MainButton>
    </div>
  )
}

export default App;