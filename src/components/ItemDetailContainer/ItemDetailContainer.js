import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { CircularProgress } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";

const ItemDetailContainer = ({ params }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getData(db) {
      const docRef = doc(db, "items", params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let product = docSnap.data();
        product.id = docSnap.id;
        setData(product);
        setLoading(false);
      } else {
        navigate("*");
      }
    }
    getData(db);
  }, [params.id, navigate]);

  return (
    <div className="itemdetail-container">
      {loading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : (
        <ItemDetail data={data} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
