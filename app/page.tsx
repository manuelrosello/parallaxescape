"use client";

import dynamic from "next/dynamic";
import Loader from "./ui/parallax/loader";
import "./ui/styles/parallax.scss";

// The scenery is random and reads localStorage, so it only renders in the browser
const Parallax = dynamic(() => import("./ui/parallax/parallax"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
  return <Parallax />;
}
