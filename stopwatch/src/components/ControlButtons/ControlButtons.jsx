import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
	const StartButton = (
		<div className="btn btn-one btn-start" onMouseDown={e => e.preventDefault()} onClick={props.handleStart}>
			Start
		</div>
	);

	const ActiveButtons = (
		<div className="btn-grp">
			<div className="btn btn-two" onMouseDown={e => e.preventDefault()} onClick={props.handleReset}>
				Reset
			</div>
			<div className="btn btn-one" onMouseDown={e => e.preventDefault()} onClick={props.handlePauseResume}>
				{props.isPaused ? "Resume" : "Pause"}
			</div>
			<div className="btn btn-three" onMouseDown={e => e.preventDefault()} onClick={props.handleLap}>
				Lap
			</div>
		</div>
	);

	return (
		<div className="Control-Buttons">
			<div>{props.active ? ActiveButtons : StartButton}</div>
		</div>
	);
}
