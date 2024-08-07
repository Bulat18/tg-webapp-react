import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";



function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready(); //приложение польностью проинициализировалось
    // и его можно польностью отрисовы вать
  }, [])



  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
