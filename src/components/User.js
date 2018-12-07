import React, { Component } from "react";

const bounds = [window.innerWidth - 50, window.innerHeight - 50];

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			left: 0,
			top: 0,
			movePixel: 10,
			score: 0,
			checkpoint: 0,
			gamestart: true,
			gameover: false
		};
	}

	componentDidMount() {
		document.addEventListener("keydown", e => this.updatePosition(e));
	}

	componentDidUpdate(prevProps, prevState) {
		if (!this.withinBounds()) {
			this.setState(prevState);
		}
	}

	withinBounds() {
		let currentPosition = document
			.getElementById("user")
			.getBoundingClientRect();

		return currentPosition.x > 0 &&
			currentPosition.x < bounds[0] &&
			currentPosition.y > 80 &&
			currentPosition.y < bounds[1]
			? true
			: false;
	}

	// TODO fix user movement
	updatePosition = e => {
		console.log(e);

		if (this.withinBounds()) {
			if (e.keyCode === 37) {
				this.setState({ left: this.state.left - this.state.movePixel });
			} //left arrow
			if (e.keyCode === 38) {
				// console.log("up");
				this.setState({ top: this.state.top - this.state.movePixel });
			} //up arrow
			if (e.keyCode === 39) {
				// console.log("right");
				this.setState({ left: this.state.left + this.state.movePixel });
			} //right arrow
			if (e.keyCode === 40) {
				// console.log("down");
				this.setState({ top: this.state.top + this.state.movePixel });
			} //down arrow

			// if (this.nearBounds()) {
			this.updatePage();
			// }
		}
		// After every checkpoint, revise this number
		if (this.state.top < this.state.checkpoint) {
			this.setState({ top: 0 });
		}
		if (this.state.left < 0) {
			this.setState({ left: 1 });
		}
		if (this.state.left > bounds[0]) {
			this.setState({ left: bounds[0] - 60 });
		}
	};

	// nearBounds() {}

	updatePage() {
		// document.documentElement.scrollTo(this.state.left, this.state.top);
		const map = document.getElementById("map");
		if (map.style.top.slice(0, -2) > 0) {
			map.style.top = 0;
		} else {
			map.style.top = `${-this.state.top}px`;
		}
	}

	render() {
		const userStyle = {
			transform: `translate(${this.state.left}px, 0)`,
			top: `100px`, //starting position
			left: `50vw`
		};
		return <div id="user" style={userStyle} />;
	}
}

export default User;
