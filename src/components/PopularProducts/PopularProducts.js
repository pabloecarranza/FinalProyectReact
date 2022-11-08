import { useEffect, useState } from "react";

import "./PopularProducts.css";

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseconfig";

import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFS = await getDocs(collection(db, "items"));

      const productsFS = dataFS.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;
      });

      setDataProducts(
        productsFS.filter(
          (product) =>
            product.id === "17J1hZBumVLmcy77BxJv" ||
            product.id === "6CA1pASLnNYr7yPdrDFR" ||
            product.id === "7yW9MW6VS7PZePMKW8a5"
        )
      );
    };
    getData();
  }, []);
  console.log(dataProducts);
  return (
    <section className="trending-container">
      <h2 className="hometitle">Trending now </h2>

      <div className="productcards-container">
        {dataProducts.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="productcard">
                <div className="productcard-img">
                  {<img src={product.image} alt="#" />}
                </div>
                <div className="productcard-text">
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
