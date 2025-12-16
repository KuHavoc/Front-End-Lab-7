import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsGallery from './components/GoodsGallery';

function App() {
  const [nameActive, setNameActive] = useState(false);
  const [birthActive, setBirthActive] = useState(false);

  return (
    <div className="app">
      <Header
        nameActive={nameActive}
        birthActive={birthActive}
        toggleName={() => setNameActive(!nameActive)}
        toggleBirth={() => setBirthActive(!birthActive)}
      />

      <Content />
      <Image />

      <h3>Галерея товарів</h3>
      <GoodsGallery />
    </div>
  );
}

export default App;
