import { useState, useEffect } from "react";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";

import face from "./face-no-eyes.png";
import faceMobile from "./face.png";
import "./Face.scss";

const left = 180;
const right = 85;

const Face = () => {
  const [mousePosition, setMousePosition] = useState(0);
  const [showFace, setShowFace] = useState(false);
  const lY = document.body.clientWidth - left;
  const rY = document.body.clientWidth - right;

  useEffect(() => {
    if (document.body.clientWidth < 550) {
      setShowFace(true);
      return;
    }

    const faceMove = (e: MouseEvent) => {
      if (!showFace) {
        setShowFace(true);
      }
      setMousePosition(e.clientX);
    };
    const handleMouseMove = () => throttle(faceMove, 100);
    const handleShow = () =>
      debounce(() => {
        setShowFace(false);
      }, 1500);

    window.addEventListener("mousemove", handleMouseMove());
    window.addEventListener("mousemove", handleShow());
    return () => {
      window.removeEventListener("mousemove", handleMouseMove());
      window.removeEventListener("mousemove", handleShow());
    };
  }, [showFace]);

  const leftEye =
    mousePosition < lY
      ? -(100 - (mousePosition * 100) / lY) * 1.5
      : ((mousePosition - lY) * 100) / (document.body.clientWidth - lY);
  const rightEye =
    mousePosition < rY
      ? -(100 - (mousePosition * 100) / rY) * 2
      : (((mousePosition - rY) * 100) / (document.body.clientWidth - rY)) * 1.5;

  return (
    <div className="face__container">
      <div
        className="face"
        style={{
          transform: !showFace ? "translateX(100%)" : "translateX(0%)",
        }}
      >
        <img className="face__desktop" src={face} alt="logo" />
        <img className="face__mobile" src={faceMobile} alt="logo with eyes" />
        <div className="eyes__container">
          <span
            className="eyes eyes--left"
            style={{
              transform: `translateX(${leftEye}%)`,
            }}
          ></span>
          <span
            className="eyes eyes--right"
            style={{
              transform: `translateX(${rightEye}%)`,
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Face;
