import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import Backdrop from "./Backdrop";
import "./styles.css";
import logo from "./logo.svg";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */
const AudioPlayer = ({ tracks }) => {
    // State
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const [value, setValue] = useState(30);

    const handleChange = (number) => {
        setValue(number);
    };
    console.log("Leeee================", value);

    // Destructure for conciseness
    const { title, artist, color, image, audioSrc } = tracks[trackIndex];

    // Refs
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    // Destructure for conciseness
    const { duration } = audioRef.current;

    const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : "0%";
    const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);

    };

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };

    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    };

    const toNextTrack = () => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            clearInterval(intervalRef.current);

            intervalRef.current = setInterval(() => {
                if (audioRef.current.ended) {
                    if (trackIndex < tracks.length - 1) {
                        setTrackIndex(trackIndex + 1);
                    } else {
                        setTrackIndex(0);
                    }
                } else {
                    setTrackProgress(audioRef.current.currentTime);
                }
            }, [1000]);
        } else {
            audioRef.current.pause();
        }

        return intervalRef.current;
    }, [isPlaying, trackIndex, tracks.length]);

    // Handles cleanup and setup when changing tracks
    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            intervalRef.current = setInterval(() => {
                if (audioRef.current.ended) {
                    if (trackIndex < tracks.length - 1) {
                        setTrackIndex(trackIndex + 1);
                    } else {
                        setTrackIndex(0);
                    }
                } else {
                    setTrackProgress(audioRef.current.currentTime);
                }
            }, [1000]);
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex, audioSrc, tracks.length]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="audio-player">
            <div className="track-info">
                <img
                    className="artwork"
                    src={image}
                    alt={`track artwork for ${title} by ${artist}`}
                />
                <div className="logo-title">
                    <div>
                        <h5 className="title">{title}</h5>
                        <h4 className="artist">{artist}</h4>
                    </div>
                    <img src={logo} className="App-logo" alt="logo" />

                </div>
                <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    style={{ background: trackStyling }}
                />
                <AudioControls
                    isPlaying={isPlaying}
                    onPrevClick={toPrevTrack}
                    onNextClick={toNextTrack}
                    onPlayPauseClick={setIsPlaying}
                />
                {/* <input type="range" id="volume-slider" max="100" value="100" /> */}
            </div>
            <Backdrop
                trackIndex={trackIndex}
                activeColor={color}
                isPlaying={isPlaying}
            />

            <Box sx={{ width: "100%" }}>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown />
                    <Slider aria-label="Volume" value={value} onChange={(e) => handleChange(e.target.value)} />
                    <VolumeUp />
                </Stack>
            </Box>
        </div>
    );
};

export default AudioPlayer;
