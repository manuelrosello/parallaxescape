import { generateElements } from "@/app/lib/scenery-utils";
import PaletteSwitcher from "@/app/lib/switcher";
import React from "react";
import Player from "../player/player";

/**
 * Creates a parallax effect by overlapping several element layers
 */
export default function Parallax() {
  return (
    <>
      <PaletteSwitcher></PaletteSwitcher>
      <Player></Player>
      <div className="parallax-container">
        <div className="pe-layer pe-l1">
          {generateElements(1, 4).map((el) => (
            <React.Fragment key={el.key}>{el}</React.Fragment>
          ))}
          <div className="pe-layer-base h-1/4"></div>
        </div>
        <div className="pe-layer pe-l2">
          {generateElements(2, 8).map((el) => (
            <React.Fragment key={el.key}>{el}</React.Fragment>
          ))}
          <div className="pe-layer-base h-1/3"></div>
        </div>
        <div className="pe-layer pe-l3">
          {generateElements(3, 20).map((el) => (
            <React.Fragment key={el.key}>{el}</React.Fragment>
          ))}
        </div>
        <div className="pe-layer pe-l4">
          {generateElements(4, 10).map((el) => (
            <React.Fragment key={el.key}>{el}</React.Fragment>
          ))}
        </div>
        <div className="pe-bg pe-layer z-0">
          <div className="pe-bg-1"></div>
          <div className="pe-bg-2"></div>
        </div>
      </div>
    </>
  );
}
