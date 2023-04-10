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
    <div className="App">
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: tg.MainButton.color,
				},
			}}
		>
			<Input style={{outline: '1px solid purple !important'}} size='large' placeholder='Company name' className='inpTest'/>
		</ConfigProvider>
    </div>
  )
}

export default App;