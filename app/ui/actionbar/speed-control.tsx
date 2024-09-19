import { useEffect, useState } from "react";
import { GiTurtle, GiRabbit, GiSnail } from "react-icons/gi";

/**
 * Available animation speeds (seconds for a full cycle to complete)
 */
export const speedValues: Record<string, number> = {
  default: 90,
  slow: 360,
  extraSlow: 1440,
};

/**
 * Button that allows switching speed modes
 */
export default function SpeedControl() {
  const [currentSpeed, setCurrentSpeed] = useState(() => {
    return localStorage.getItem("speed") || "default";
  });

  useEffect(() => {
    const root = document.documentElement;
    const speed = speedValues[currentSpeed] || speedValues["default"];

    root.style.setProperty("--speed", `${speed}s`);
    localStorage.setItem("speed", currentSpeed);
  }, [currentSpeed]);

  // Function to cycle through the available speeds
  const handleSpeedChange = () => {
    const speedOptions = Object.keys(speedValues);
    const currentIndex = speedOptions.indexOf(currentSpeed);
    const nextSpeed = speedOptions[(currentIndex + 1) % speedOptions.length];
    setCurrentSpeed(nextSpeed);
  };

  // Determine which icon to show based on the current speed
  const renderIcon = () => {
    switch (currentSpeed) {
      case "slow":
        return <GiTurtle className="pe-actionbar-icon" />;
      case "extraSlow":
        return <GiSnail className="pe-actionbar-icon" />;
      default:
        return <GiRabbit className="pe-actionbar-icon" />;
    }
  };

  return (
    <button
      className="pe-actionbar-button transition"
      onClick={handleSpeedChange}
      aria-label="change animation speed"
    >
      {renderIcon()}
    </button>
  );
}
