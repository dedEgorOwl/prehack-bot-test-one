import { useEffect } from 'react';
import { Input, themeParams } from 'antd';
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
		<Input style={{outline: themeParams.button_text_color}} size='large' placeholder='Company name' className='inpTest'/>
    </div>
  )
}

export default App;