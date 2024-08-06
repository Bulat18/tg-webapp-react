import React, { useEffect } from 'react';
import './App.css';
import {useTelegram} from '../components/hooks/useTelegram'

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready(); //приложение польностью проинициализировалось
    // и его можно польностью отрисовы вать
  }, [])



  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
