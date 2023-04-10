import { useEffect } from 'react';
import { TextField, createTheme } from '@mui/material';
import './App.scss'



function App() {
	const tg = window.Telegram.WebApp;
	tg.MainButton.text = "Заказать";
	tg.MainButton.show();
	const mainColor = tg.themeParams.button_color;

	
	const { palette } = createTheme();
	const theme = createTheme({
		palette: {
		  tgMainThemeColor: palette.augmentColor({
		  color: {
			 main: mainColor
		  	}
		  })
		}
	  });

	useEffect(() => {
		tg.ready();
	}, []);


  return (
	<div className="App">
		<TextField id="outlined-search" color="tgMainThemeColor" label="Company name" type="search" />
	</div>
  )
}

export default App;