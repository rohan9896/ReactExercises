import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function App() {
  const cart = [
    {
      item: "Apple",
      quant: 0,
      id: uuidv4(),
      img:
        "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg"
    },
    {
      item: "Mango",
      quant: 0,
      id: uuidv4(),
      img:
        "https://image.shutterstock.com/image-photo/mango-leaf-isolated-white-background-260nw-1157303833.jpg"
    },
    {
      item: "banana",
      quant: 0,
      id: uuidv4(),
      img:
        "http://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&q=80&fm=jpg"
    }
  ];

  const [list, setList] = useState(cart);

  const addToCartHandler = (id) => {
    let newArr = [...list];
    newArr.map((itemObj, index) => {
      if (itemObj.id === id) {
        let newItemObj = {
          ...itemObj,
          quant: itemObj.quant + 1
        };
        newArr[index] = newItemObj;
      }
    });
    setList(newArr);
  };

  return (
    <div className="App">
      <ul>
        {list.map((itemObj) => {
          console.log(itemObj.item + ": " + itemObj.id);
          return (
            <li
              style={{ listStyle: "none", display: "inline-block" }}
              key={itemObj.id}
            >
              <div style={{ margin: "10px" }}>
                <img className="img" src={itemObj.img}></img>
                <p>{itemObj.item}</p>
                <button onClick={() => addToCartHandler(itemObj.id)}>
                  Add To cart
                </button>
              </div>
              {/* <hr /> */}
            </li>
          );
        })}
      </ul>

      <h2>Cart</h2>
      <ul>
        {list.map((itemObj) => {
          return itemObj.quant ? (
            <li key={itemObj.id}>
              <span>{itemObj.item}</span>
              <span> X {itemObj.quant}</span>
            </li>
          ) : (
            ""
          );
        })}
      </ul>
    </div>
  );
}
