function GoodsCard({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} width="120" />
      <h4>{title}</h4>
      <p>Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;
