import React, { useState } from "react";
import "./Video.css";

export default function Video() {
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
    <div className="video-block" onClick={() => setShow(false)}>
      <iframe
        width="1257"
        height="707"
        src="https://www.youtube.com/embed/Oy9lTKxW3kc"
        title="Tell me about yourself"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  );
}
