import React from "react";

const enemyColors = [
	"red",
	"orange",
	"darkred",
	"crimson",
	"maroon",
	"hotpink"
];

const keyframes = [
	"slideinright",
	"slideinright-half",
	"slideinleft",
	"slideinleft-half"
];

class Enemy extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "",
			speed: 1,
			cubic: false,
			direction: "",
			distance: ""
		};
	}

	componentDidMount() {}

	getRandom(min, max) {
		let val = Math.floor(Math.random() * (max - min) + min);
		return val;
	}

	initStyle() {
		const speedMin = 2,
			speedMax = 8,
			distanceMin = 200,
			distanceMax = window.innerWidth + 100,
			topMin = 300,
			topMax = 2800,
			leftMin = 100,
			leftMax = window.innerWidth - 50;

		let speed = this.getRandom(speedMin, speedMax);
		let distance = this.getRandom(distanceMin, distanceMax);
		let top = this.getRandom(topMin, topMax);
		let left = this.getRandom(leftMin, leftMax);

		//TODO find out how to add in this value into
		// the animation keyframe

		let animateChance = Math.round(Math.random());
		//TODO create a style variant for non-animated

		let color = enemyColors[Math.floor(Math.random() * enemyColors.length)];

		// TODO random animation keyframe
		let animationName = keyframes[Math.floor(Math.random() * keyframes.length)];

		let style = {
			backgroundColor: color,
			animationDuration: `${speed}s`,
			animationName: animationName,
			animationDirection: `alternate`,
			animationIterationCount: `infinite`,
			top: top,
			left: left
		};
		return style;
	}

	render() {
		let enemyStyle = this.initStyle();

		return <div className="enemy" style={enemyStyle} />;
	}
}
export default Enemy;
