import React, { useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Video.css";

export default function Video() {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(true);
  if (!show) {
    return (
      <div className="video-button-container">
        <button className="video-button" onClick={() => setShow(true)}>
          Show Video
        </button>
      </div>
    );
  }
  return (
    <div className="video" style={{ backgroundColor: theme.secondary }}>
      {/* <div className="video-block" onClick={() => setShow(false)}> */}
      <iframe
        width="500"
        height="300"
        src="https://www.youtube.com/embed/Oy9lTKxW3kc"
        title="Tell me about yourself"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <iframe
        width="500"
        height="300"
        src="https://www.youtube.com/embed/X71VUvvlIlk"
        title="Exploring a Previous Project: Creating a Simple NFT Explorer with React and TailwindCSS."
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {/* </div> */}
    </div>
  );
}
