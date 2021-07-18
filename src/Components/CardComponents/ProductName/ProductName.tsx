const ProductName = ({ src, prodName }) => {
  return (
    <div>
      <img src={src} alt={prodName} />
      <h3>{prodName}</h3>
    </div>
  );
};
