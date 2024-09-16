"use client";

import { useEffect, useState } from "react";
import Loader from "./ui/parallax/loader";
import Parallax from "./ui/parallax/parallax";
import "./ui/styles/parallax.scss";

export default function Home() {
  const [content, setContent] = useState(<Loader></Loader>);
  useEffect(() => {
    // Wait until browser detection
    if (typeof window !== "undefined") {
      setContent(<Parallax></Parallax>);
    }
  }, []);
  return content;
}
