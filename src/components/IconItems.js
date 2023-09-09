import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSnowman,
  faShoppingBag,
  faRocket,
  faPizzaSlice,
  faPencilAlt,
  faMotorcycle,
  faMugHot,
  faMoon,
  faHorse,
  faHome,
  faIceCream,
  faHeart,
  faHamburger,
  faGuitar,
  faFish,
  faEgg,
  faFan,
  faDove,
  faCrown,
  faCut,
  faCloud,
  faCarrot,
  faCar,
  faCat,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import { generateRandomNumber } from "../utils/random";

const IconItems = ({ iconCount }) => {
  const [count, setCount] = useState(1);
  const [arrayToRender, setArrayToRender] = useState([]);

  const iconsArray = [
    faSnowman,
    faBirthdayCake,
    faCoffee,
    faShoppingBag,
    faRocket,
    faPizzaSlice,
    faPencilAlt,
    faMotorcycle,
    faMugHot,
    faMoon,
    faHorse,
    faHome,
    faIceCream,
    faHeart,
    faHamburger,
    faGuitar,
    faFish,
    faEgg,
    faFan,
    faDove,
    faCrown,
    faCut,
    faCloud,
    faCarrot,
    faCar,
    faCat,
  ];
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    setCount(1);
    setIconIndex(generateRandomNumber(iconsArray.length, false));
    const tempArray = [];
    for (let i = 1; i <= iconCount; i++) {
      tempArray.push({
        content: i,
        counter: null,
        isClicked: false,
      });
    }
    setArrayToRender(tempArray);
  }, [iconCount, iconsArray.length]);

  const handleItemClick = (itemContent) => {
    arrayToRender.map((item) => {
      if (item.content === itemContent && !item.isClicked) {
        setCount((prevCount) => prevCount + 1);
        item.counter = count;
        item.isClicked = true;
      }
      return null;
    });
  };

  const renderingContent = arrayToRender.map((item) => (
    <li
      className={item.isClicked ? "list-item item-clicked" : "list-item"}
      key={item.content}
      onClick={() => handleItemClick(item.content)}
    >
      <FontAwesomeIcon icon={iconsArray[iconIndex]} />
      <span className="list-item-count">
        {item.counter > 0 && item.counter}
      </span>
    </li>
  ));

  return <ul className="icon-list">{renderingContent}</ul>;
};

export default React.memo(IconItems);
