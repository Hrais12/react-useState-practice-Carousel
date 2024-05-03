import { useState } from "react";
import "./App.css";
import photos from "./models/photos.js";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";

import { symbols } from "./models/symbols.js";

function App() {
  //State and setter function
  let [count, setCount] = useState(0);
  let [currentImage, setCurrentImage] = useState(photos[count]);

  const changePic = () => {
    setCount((count += 1));
    setCurrentImage(photos[count]);

    console.log("Current Count: ", count);
    console.log("Current Image:", currentImage);
    // ---> [ [0],[1], [2]] = count++
  };

  const reversePic = () => {
    setCount(count--);
    setCurrentImage(photos[count]);

    console.log("Current Count: ", count);
    console.log("Current Image:", currentImage);
  };

  return (
    <div className="App">
      <h1> City Directory</h1>
      <Card currentImage={currentImage} />

      <div className="btnContainer">
        <Button action={reversePic} icon={symbols.left} />
        <Button action={changePic} icon={symbols.right} />
      </div>
    </div>
  );
}

export default App;
