import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import './App.scss'

const tg = window.Telegram.WebApp;
const mainColor = tg.themeParams.color;

function App() {

	tg.MainButton.text = "Заказать";
	tg.MainButton.show();

	useEffect(() => {
		tg.ready();
	}, []);

	

  return (
	<div className="App">
		{mainColor}
		<TextField id="outlined-search" color={mainColor} label="Company name" type="search" />
	</div>
  )
}

export default App;