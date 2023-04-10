import { useEffect } from 'react';
import './App.scss'
const tg = window.Telegram.WebApp;

function App() {

	useEffect(() => {
		tg.ready();
	}, []);

	const onClose = () => {
		tg.close();
	};

  return (
    <div className="App">
     qwerty
		 <button onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default App;