import { useEffect, useState } from 'react';
import './App.scss'
const tg = window.Telegram.WebApp;



function App() {
	const [cs, setCs] = useState('');

	useEffect(() => {
		tg.ready();
		setCs(tg.colorScheme)
	}, []);

	const onClose = () => {
		tg.close();
	};

  return (
    <div className="App" style={{'--tg-color-scheme': 'dark'}}>
    {cs}
		<button onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default App;