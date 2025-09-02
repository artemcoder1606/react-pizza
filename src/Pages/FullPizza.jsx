import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { PizzaBlock } from "../components/PizzaBlock";

export const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    try {
      const getPizzas = async () => {
        const { data } = await axios.get(
          `https://67877bf5c4a42c916106edd2.mockapi.io/items/${id}`
        );
        setPizza(data);
      };
      getPizzas();
    } catch (error) {
		'Everything got fucked up!'
	 }
  }, []);

  return (
    <div className="container pizza-card">
      {!pizza ? <p>Loading...</p> : <PizzaBlock {...pizza} /> }
    </div>
  );
};
