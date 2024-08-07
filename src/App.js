import './App.css';
import {useEffect} from 'react';
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";




function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready(); //приложение польностью проинициализировалось
    // и его можно польностью отрисовы вать
  }, []);





  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
};

export default App;
