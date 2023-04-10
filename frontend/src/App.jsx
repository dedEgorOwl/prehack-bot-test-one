import { useEffect } from 'react';
import { TextField } from '@mui/material';
import './App.scss'

const tg = window.Telegram.WebApp;
const mainColor = tg.themeParams;

function App() {

	tg.MainButton.text = "Заказать";
	tg.MainButton.show();

	useEffect(() => {
		tg.ready();
	}, []);

	console.log(mainColor)

  return (
	<div className="App">
		{mainColor}
		<TextField id="outlined-search" color={mainColor} label="Company name" type="search" />
	</div>
  )
}

export default App;