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
		<Input size='large' placeholder='Company name' className='inpTest'/>
    </div>
  )
}

export default App;