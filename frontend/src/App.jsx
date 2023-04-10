import { useEffect } from 'react';
import { Input } from 'antd';
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
		<Input color={themeParams.button_color} size='large' placeholder='Company name' className='inpTest'/>
    </div>
  )
}

export default App;