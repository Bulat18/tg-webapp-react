import './App.css';
import {useEffect} from 'react';
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import Button from './components/Button/Button';
import {Route, Routes} from 'react-router-dom';
import Productlist from './components/Productlist/Productlist';
import Form from './components/Form/Form';



function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready(); //приложение польностью проинициализировалось
    // и его можно польностью отрисовывать
  }, []);


  return (
    <div className="App">
      <Header />
      <Button style="margin-top:15px;" onClick={onToggleButton}>Show Button</Button>

      <Routes>
          <Route index element = {<Productlist />} />
          <Route path={'form'} element = {<Form />} />
      </Routes>
    </div>
  );
};

export default App;
