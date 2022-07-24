import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export default function SinglePage() {
  const [data, setData] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      try {
        const {data} = await axios.get(`https://62b626ae42c6473c4b403a58.mockapi.io/pizzas/` + id);
        setData(data);
      } catch (e) {
        alert(e.name);
        navigate("/")
      }
    }

    fetch();
  }, [id]);

  if (!data) {
    return 'Загрузка...'
  }

  return (
    <div className="container">
      <img src={data.imageUrl} alt=""/>
      <h2>{data.name}</h2>
      <p>Discription</p>
      <h4>{data.price}</h4>
    </div>
  );
}
