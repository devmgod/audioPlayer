import React from "react";
import { ReactComponent as Play } from "./assets/play-button.svg";
import { ReactComponent as Pause } from "./assets/pause-btn.svg";
import { ReactComponent as Next } from "./assets/forward-button.svg";
import { ReactComponent as Prev } from "./assets/forward-button.svg";

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
            <Prev className="prev-btn" />
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
            <Next />
        </button>
    </div>
);

export default AudioControls;
