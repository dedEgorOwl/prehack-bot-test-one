import { useEffect } from 'react';
import { ConfigProvider, Input } from 'antd';
import './App.scss'



function App() {
	const tg = window.Telegram.WebApp;
	tg.MainButton.text = "Заказать";
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
		<Input size="large" placeholder="large size" />
		</div>
	  </ConfigProvider>
	
  )
}

export default App;