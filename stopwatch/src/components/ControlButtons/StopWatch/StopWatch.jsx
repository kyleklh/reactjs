import React, { useState, useEffect } from 'react';
import './StopWatch.css';
import Timer from '../Timer/Timer';
import ControlButtons from '../ControlButtons';

function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused((prev) => !prev);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setTime(0);
        setLaps([]); 
    };

    const handleLap = () => {
        setLaps([...laps, time]); 
    };

    return (
        <div className="stopwatch-container">
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
                handleLap={handleLap} 
            />
            <div className="laps">
                {laps.map((lapTime, index) => (
                    <div key={index} className="lap">
                        Lap {index + 1}: {("0" + Math.floor((lapTime / 60000) % 60)).slice(-2)}:
                        {("0" + Math.floor((lapTime / 1000) % 60)).slice(-2)}.
                        {("0" + ((lapTime / 10) % 100)).slice(-2)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StopWatch;
