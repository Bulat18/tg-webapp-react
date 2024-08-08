import './App.css';
import {useEffect} from 'react';
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import Productlist from './components/Productlist/Productlist';
import Form from './components/Form/Form';



function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready(); //приложение польностью проинициализировалось
    // и его можно польностью отрисовы вать
  }, []);


  return (
    <div className="App">
      <Header />
      <Routes>
          <Route index element = {<Productlist />} />
          <Route path={'form'} element = {<Form />} />
      </Routes>
    </div>
  );
};

export default App;
