import "./Categories.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseconfig";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFS = await getDocs(collection(db, "category")); //items
      const productsFS = dataFS.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;
      });
      setData(productsFS);
    };
    getData();
  }, []);

  return (
    <div className="categories">
      <h2 className="hometitle">Categories</h2>

      <div className="categories-container">
        {data.map((category) => {
          return (
            <Link key={category.img} to={`/category/${category.name}`}>
              <div className="categorymain-container">
                <img
                  src={category.img}
                  alt="people using skincare products"
                ></img>

                <div className="categorytext-container">
                  <h2>{category.name}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
