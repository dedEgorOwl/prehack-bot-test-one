import { useEffect } from 'react';
import './App.scss'
const tg = window.Telegram.WebApp;



function App() {

	useEffect(() => {
		tg.ready();
		setCs(tg.colorScheme)
	}, []);

	const onClose = () => {
		tg.close();
	};

  return (
    <div className="App">
		<PopupButton></PopupButton>
    </div>
  )
}

export default App;