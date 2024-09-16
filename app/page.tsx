import PaletteSwitcher from "./lib/switcher";
import Tree from './lib/sceneryElements/tree.svg';
import BigTree from './lib/sceneryElements/bigTree.svg';
import Mountains from './lib/sceneryElements/mountains.svg';
import "./ui/styles/parallax.scss";

export default function Home() {
  return (
    <>
      <PaletteSwitcher></PaletteSwitcher>
      <div className="pe-l1 absolute z-30 h-screen w-screen overflow-hidden">
        <div className="absolute h-1/4 bottom-0 w-full"></div>
        <Tree className="absolute h-1/3 bottom-48 left-12"></Tree>
      </div>
      <div className="pe-l2 absolute z-20 h-screen w-screen overflow-hidden">
        <div className="absolute h-1/3 bottom-0 w-full"></div>
        <BigTree className="absolute h-1/2 bottom-64 left-3/4"></BigTree>
      </div>
      <div className="pe-l3 absolute z-10 h-screen w-screen overflow-hidden">
        <div className="absolute h-1/2 bottom-0 w-full"></div>
        <Mountains className="absolute h-1/2 bottom-80 left-1/4"></Mountains>
      </div>
      <div className="pe-bg absolute z-0 h-screen w-screen overflow-hidden">
        <div className="absolute h-full bottom-0 w-full"></div>
      </div>
    </>
  );
}
