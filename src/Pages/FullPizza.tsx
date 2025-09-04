import React from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { PizzaBlock } from "../components/PizzaBlock";

export const FullPizza = () => {
  const [pizza, setPizza] = React.useState<{
    title: string,
    imageUrl: string,
    sizes: [number],
    types: [number],
    price: number,
    id: number

   }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const getPizzas = async () => {
      try {
        const { data } = await axios.get(
          `https://67877bf5c4a42c916106edd2.mockapi.io/items/` + id
        );
        setPizza(data);
      } catch (error) {
        alert("Everything got fucked up!");
        navigate("/");
      }
    };
    getPizzas();
  }, []);

  return (
    <div className="container pizza-card">
      {!pizza ? <p>Loading...</p> : <PizzaBlock {...pizza} />}
    </div>
  );
};
