import { useEffect } from 'react';
import { Input } from 'antd';
import './App.scss'

const tg = window.Telegram.WebApp;
const mainColor = tg.MainButton.color;


function App() {

	tg.MainButton.text = "Заказать";
	tg.MainButton.show();

	useEffect(() => {
		tg.ready();
	}, []);

	
  return (
    <div className="App">
		<Input style={{outline: '1px solid purple !important'}} size='large' placeholder='Company name' className='inpTest'/>
    </div>
  )
}

export default App;