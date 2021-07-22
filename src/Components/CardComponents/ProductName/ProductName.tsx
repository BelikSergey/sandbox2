import React from "react";

interface IProps {
  src: string;
  prodName: string;
  alt: string;
}

const ProductName = ({ src, prodName, alt }: IProps) => {
  return (
    <div className="Card__Name__img">
      <img
        style={{ width: "100px", height: "80px" }}
        src={src}
        alt={alt}
      ></img>
      <h3 className="Card__Name">{prodName}</h3>
    </div>
  );
};

export default ProductName;
