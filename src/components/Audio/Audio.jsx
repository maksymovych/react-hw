import React from "react";
import ReactAudioPlayer from "react-audio-player";
import sound from "../../audio/sound.mp3";

function Audio({ autoPlay }) {
  return (
    <ReactAudioPlayer
      style={{ display: "none" }}
      src={sound}
      autoPlay={true}
      controls
    />
  );
}

export default Audio;
