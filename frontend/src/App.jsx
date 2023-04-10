import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
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
		<TextField required id="outlined-required" label="Required" defaultValue="Hello World"/>
	</div>
  )
}

export default App;