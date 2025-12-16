import GoodsCard from './GoodsCard';

function GoodsGallery() {
  const goods = [
    {
      title: 'Apple',
      price: 15,
      image:
        'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
    },
    {
      title: 'Pear',
      price: 20,
      image:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/27/0/HEW_Pears_s4x3.jpg.rend.hgtvcom.1280.720.85.suffix/1371612039080.webp',
    },
    {
      title: 'Grape',
      price: 25,
      image:
        'https://voca-land.sgp1.cdn.digitaloceanspaces.com/0/1757663603569/ceb4bd68.jpg',
    },
    {
      title: 'Peach',
      price: 18,
      image:
        'https://i5.walmartimages.com/asr/0fb19ee3-a85c-4519-bc82-0cffa554cfa6.3f1325ff0c0b5334793483425bc92ace.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    },
    {
      title: 'Banana',
      price: 12,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
    },
    {
      title: 'Orange',
      price: 14,
      image: 'https://www.quanta.org/thumbs/thumb-orange-640x480-orange.jpg',
    },
  ];

  return (
    <div className="gallery">
      {goods.map((item, index) => (
        <GoodsCard key={index} {...item} />
      ))}
    </div>
  );
}

export default GoodsGallery;
