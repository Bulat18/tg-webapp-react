import React, { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready(); //приложение польностью проинициализировалось
    // и его можно польностью отрисовывать
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      work
      <button onClick={onClose}>Close</button> //onClick - слушатель событий 
    </div>
  );
}

export default App;
