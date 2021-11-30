import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Time from "./components/Time";
import TodoList from "./components/TodoList";
import Links from "./components/Links";
import Weather from "./components/Weather";
import Unsplash from "./components/Unsplash";
import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        <div className="top-row">
          <Links />
          <Weather className="weatherbox"/>
        </div>

        <div className="center-text">
          <Time />
          <Search />
        </div>

        <div className="bottom-row">
          <Unsplash />
          <TodoList />
        </div>
      </div>
    </>
  );
}
export default App;

// const APP_ID = "API KEY";
// const [images, setImages] = useState([]);
// const [loaded, setLoaded] = useState(false);

// useEffect(() => {
//   const fetchImages = (count = 1) => {
//     axios
//       .get(
//         `https://api.unsplash.com/photos/random?client_id=${APP_ID}&count=${count}`
//       )
//       .then((res) => {
//         setImages(res.data);
//         setLoaded(true);

//         console.log(images);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   fetchImages();
// }, []);

{
  /* <div style={{ display: "block" }}>
        <ul>
          {loaded
            ? images.map((image) => (
                <li
                  style={{
                    margin: "0",
                    padding: "0",
                    zIndex: "1",
                    backgroundImage: `url(${image.urls.regular})`,
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    backgroundColor: "transparent",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></li>
              ))
            : ""}
        </ul>
      </div> */
}
