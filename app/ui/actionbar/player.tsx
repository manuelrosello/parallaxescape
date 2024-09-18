import "@/app/ui/styles/actionbar.scss";
import { useState } from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";

/**
 * Embedded Spotify player
 */
export default function Player() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-5 items-end">
      <button
        className="pe-actionbar-button"
        onClick={() => setVisible(!visible)}
      >
        <BsMusicNoteBeamed className="pe-actionbar-icon"></BsMusicNoteBeamed>
      </button>

      <iframe
        className="w-max"
        style={{
          display: visible ? "unset" : "none",
          position: 'absolute',
          marginTop: '36px',
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
