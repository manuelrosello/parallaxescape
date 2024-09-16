import BigTree from "@/app/lib/sceneryElements/bigTree.svg";
import Mountains from "@/app/lib/sceneryElements/mountains.svg";
import Tree from "@/app/lib/sceneryElements/tree.svg";
import PaletteSwitcher from "@/app/lib/switcher";

/**
 * Creates a parallax effect by overlapping several element layers
 */
export default function Parallax() {
  return (
    <>
      <PaletteSwitcher></PaletteSwitcher>
      <div className="pe-l1 absolute z-40 h-screen w-screen overflow-hidden">
        <div className="absolute h-1/4 bottom-0 w-full"></div>
        <Tree className="absolute h-1/4 left-12"></Tree>
      </div>
      <div className="pe-l2 absolute z-30 h-screen w-screen overflow-hidden">
        <div className="absolute h-1/3 bottom-0 w-full"></div>
        <BigTree className="absolute h2/3 left-3/4"></BigTree>
      </div>
      <div className="pe-l3 absolute z-20 h-screen w-screen overflow-hidden">
        <div className="absolute h-1/2 bottom-0 w-full"></div>
        <Mountains className="absolute h-1/2 left-1/4"></Mountains>
      </div>
      <div className="pe-l4 absolute z-10 h-screen w-screen overflow-hidden">
        <div className="absolute h-2/3 bottom-0 w-full"></div>
        <Mountains className="absolute h-1/3 left-1/6"></Mountains>
        <Mountains className="absolute h-1/6 left-2/3"></Mountains>
      </div>
      <div className="pe-bg absolute z-0 h-screen w-screen overflow-hidden">
        <div className="absolute h-full bottom-0 w-full"></div>
      </div>
    </>
  );
}
