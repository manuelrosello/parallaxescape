import Player from "./player";
import SpeedControl from "./speed-control";

export default function ActionBar() {
  return (
    <div className="pe-actionbar-container flex flex-row gap-5 absolute p-4 right-0 top-[24px] z-50 items-start">
        <SpeedControl></SpeedControl>
        <Player></Player>
    </div>
  );
}
