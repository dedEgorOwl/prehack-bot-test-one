import { useEffect } from 'react';
import { Input, ConfigProvider } from 'antd';
import './App.scss'

const tg = window.Telegram.WebApp;

function App() {

	tg.MainButton.text = "Заказать";
	tg.MainButton.show();

	useEffect(() => {
		tg.ready();
	}, []);

	

  return (
	<ConfigProvider theme={{token: {colorPrimary: tg.MainButton.color,}}}>
		<div className="App">
			<Input size='large' placeholder='Company name' className='inpTest'/>
	
		</div>

	</ConfigProvider>
  )
}

export default App;