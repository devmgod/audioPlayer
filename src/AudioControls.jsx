import React from "react";
import { ReactComponent as Play } from "./assets/btn/play.svg";
import { ReactComponent as Pause } from "./assets/btn/pausa.svg";
import forward from "./assets/btn/adelante.png";
import backward from "./assets/btn/atras.png";

const AudioControls = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick
}) => (
    <div className="audio-controls">
        <button
            type="button"
            className="prev"
            aria-label="Previous"
            onClick={onPrevClick}
        >
            {/* <Prev className="prev-btn" /> */}
            <img src={backward} alt="prev" />
        </button>
        {isPlaying ? (
            <button
                type="button"
                className="pause"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
            >
                <Pause />
            </button>
        ) : (
            <button
                type="button"
                className="play"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                <Play />
            </button>
        )}
        <button
            type="button"
            className="next"
            aria-label="Next"
            onClick={onNextClick}
        >
            {/* <Next /> */}
            <img src={forward} alt="next" />
        </button>
    </div>
);

export default AudioControls;
