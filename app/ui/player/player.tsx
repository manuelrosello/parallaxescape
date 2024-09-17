import "@/app/ui/styles/player.scss";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Player() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-5 absolute p-4 right-0 top-[24px] z-50 items-end">
      <button className="pe-player-button" onClick={() => setVisible(!visible)}>
        <MusicalNoteIcon className="w-6 [&>path]:stroke-[0.5]"></MusicalNoteIcon>
      </button>

      <iframe
        className="w-full"
        style={{
          display: visible ? "unset" : "none",
        }}
        src="https://open.spotify.com/embed/playlist/0CFuMybe6s77w6QQrJjW7d?utm_source=generator&theme=0"
        width="40%"
        height="352"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
