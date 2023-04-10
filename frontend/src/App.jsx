import { useEffect } from 'react';
import { ConfigProvider, theme, Input, Typography } from 'antd';
import './App.scss'

const { Title, Text } = Typography;
const { TextArea } = Input;

function App() {
	const tg = window.Telegram.WebApp;
	tg.MainButton.text = "Создать";
	tg.MainButton.show();
	const themeParams = tg.themeParams;
	const colorScheme = tg.colorScheme;

	useEffect(() => {
		tg.ready();
	}, []);


  return (
	<ConfigProvider
        theme={
          themeParams.text_color
            ? {
                algorithm:
                  colorScheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
                token: {
                  colorText: themeParams.text_color,
                  colorPrimary: themeParams.button_color,
                  colorBgBase: themeParams.bg_color,
                },
              }
            : undefined
        }
      >
		<div className="App">
			<Input size="large" placeholder="Введите название" className='inpTest'/>
			<Input size="large" placeholder="Введите слоган" className='inpTest'/>
			<TextArea addonBefore="Описание" rows={6} placeholder="Введите описание" maxLength={256} className='inpTest'/>
		</div>
	  </ConfigProvider>
	
  )
}

export default App;