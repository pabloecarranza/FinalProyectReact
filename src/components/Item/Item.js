import { InfoCircle } from "react-bootstrap-icons";
import "./Item..css";

const Item = ({ data }) => {
  const { title, description, price, image } = data;

  return (
    <div className="item-container">
      <div className="item-img">
        <img alt={description} src={image} />
      </div>

      <div className="item-name">
        <h1> {title}</h1>
        <h2>${Number(price).toFixed(2)}</h2>
      </div>

      <span className="link">
        <InfoCircle />
        <p>{description}</p>
      </span>
    </div>
  );
};

export default Item;
