import { useContext } from "react";
import BurgerIngredientsList from "../burger-ingredient-list/burger-ingredients-list";
import styles from "./burger-ingredients-wrap.module.css";
import { IngredientsContext } from "../../../services/ingredientsContext";

function BurgerIngredientsWrap() {
  const data = useContext(IngredientsContext);
  const names = {
    bun: "Булки",
    sauce: "Соусы",
    main: "Ингредиенты",
  };
  let structureData = {};
  data.forEach((el) => {
    if (!structureData[el.type]) {
      structureData[el.type] = { items: [], title: names[el.type] };
    }
    structureData[el.type].items.push(el);
  });
  return (
    <ul className={styles.burgerIngredientsWrap}>
      {Object.values(structureData).map((el, index) => {
        return <BurgerIngredientsList item={el} key={index} />;
      })}
    </ul>
  );
}

export default BurgerIngredientsWrap;
