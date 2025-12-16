import { useState } from 'react';

const imgUrl =
  'https://uni-travel.com.ua/assets/images/europe/czech/charles-bridge-prague.jpg';

function Image() {
  const [images, setImages] = useState([imgUrl]);
  const [size, setSize] = useState(600);

  return (
    <>
      {images.map((img, index) => (
        <img key={index} src={img} width={size} />
      ))}

      <div className="buttons">
        <button onClick={() => setImages([...images, imgUrl])}>Додати</button>
        <button onClick={() => setSize(size + 50)}>Збільшити</button>
        <button onClick={() => setSize(size - 50)}>Зменшити</button>
        <button onClick={() => setImages(images.slice(0, -1))}>Видалити</button>
      </div>
    </>
  );
}

export default Image;
