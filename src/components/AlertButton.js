import { useEffect, useState } from "react";
import "./AlertButton.css";

function AlertButton({ buttonText }) {
  const [tapCount, setTapCount] = useState(0);

  useEffect(() => {
    let tapTimer;

    if (tapCount === 1) {
      tapTimer = setTimeout(() => {
        console.log("Single Tapped");
        setTapCount(0);
      }, 300); // Adjust the delay as needed
    } else if (tapCount === 2) {
      clearTimeout(tapTimer);
      window.alert("This is an alert message!");
      setTapCount(0);
    }

    return () => {
      clearTimeout(tapTimer);
    };
  }, [tapCount]);

  const handleTap = () => {
    setTapCount((prevTapCount) => prevTapCount + 1);
  };

  return (
    <button
      className="alertButton"
      onClick={handleTap}
      onDoubleClick={handleTap}
    >
      {buttonText}
    </button>
  );
}

export default AlertButton;
