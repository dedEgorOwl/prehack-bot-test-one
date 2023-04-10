import { useEffect } from 'react';
import { Input, ConfigProvider } from 'antd';
import './App.scss'

const tg = window.Telegram.WebApp;
const themeParams = tg.themeParams;

function App() {

	tg.MainButton.text = "Заказать";
	tg.MainButton.show();

	useEffect(() => {
		tg.ready();
	}, []);

	

  return (
	<ConfigProvider theme={
		themeParams.text_color
		  ? {
			  algorithm:
				colorScheme === 'dark'
				  ? theme.darkAlgorithm
				  : theme.defaultAlgorithm,
			  token: {
				colorText: themeParams.text_color,
				colorPrimary: themeParams.button_color,
				colorBgBase: themeParams.bg_color
			  },
			}
		  : undefined
	  }>
		<div className="App">
			<Input size='large' placeholder='Company name' className='inpTest'/>
	
		</div>

	</ConfigProvider>
  )
}

export default App;