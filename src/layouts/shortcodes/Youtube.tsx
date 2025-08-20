import type { only } from "node:test";
import React from "react";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

let LiteYouTubeEmbed: any;

if (typeof window !== "undefined") {
  // Only require in browser
  LiteYouTubeEmbed = require("react-lite-youtube-embed");
}



const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: any;
}) => {
  if (!LiteYouTubeEmbed) return null;

  return (
    <LiteYouTubeEmbed
      wrapperClass="yt-lite rounded-lg"
      id={id}
      title={title}
      {...rest}
    />
  );
};

export default Youtube;
