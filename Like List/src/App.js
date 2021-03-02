import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function App() {
  const images = [
    {
      img:
        "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
      likes: 0,
      dislikes: 0,
      id: uuidv4()
    },
    {
      img:
        "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg",
      likes: 0,
      dislikes: 0,
      id: uuidv4()
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      likes: 0,
      dislikes: 0,
      id: uuidv4()
    },
    {
      img:
        "https://api.contentstack.io/v2/assets/575e4d1c0342dfd738264a1f/download?uid=bltada7771f270d08f6",
      likes: 0,
      dislikes: 0,
      id: uuidv4()
    }
  ];

  const [imagesArr, setImagesArr] = useState(images);

  const likeHandler = (id) => {
    let newImagesArr = [...imagesArr];
    newImagesArr.map((imageObj, index) => {
      if (id === imageObj.id) {
        let newImgObj = {
          ...imageObj,
          likes: imageObj.likes + 1
        };
        newImagesArr[index] = newImgObj;
      }
    });
    setImagesArr(newImagesArr);
  };

  const dislikeHandler = (id) => {
    let newImagesArr = [...imagesArr];
    newImagesArr.map((imageObj, index) => {
      if (id === imageObj.id) {
        let newObj = {
          ...imageObj,
          dislikes: imageObj.dislikes + 1
        };
        newImagesArr[index] = newObj;
      }
    });
    setImagesArr(newImagesArr);
  };

  return (
    <div className="App">
      <h1>INSTAGRAM</h1>
      <ul>
        {imagesArr.map((imageObj) => {
          return (
            <li key={imageObj.id} className="post">
              <div>
                <img
                  alt="post"
                  className="postImg__size"
                  src={imageObj.img}
                ></img>
              </div>
              <div>
                <button onClick={() => likeHandler(imageObj.id)}>
                  Like👍 - {imageObj.likes}
                </button>
                <button onClick={() => dislikeHandler(imageObj.id)}>
                  Dislike👎 - {imageObj.dislikes}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
