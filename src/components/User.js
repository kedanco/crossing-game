import React, { Component } from "react";

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			left: 0,
			top: 0,
			bounds: []
		};
	}

	componentDidMount() {
		document.addEventListener("keydown", e => this.updatePosition(e));

		this.setState({ bounds: [window.innerWidth, window.innerHeight] });
	}

	componentDidUpdate() {
		console.log(this.state.left, this.state.top);
	}

	updatePosition = e => {
		console.log(e);

		if (e.keyCode === 37) {
			this.setState({ left: this.state.left - 5 });
		} //left arrow
		if (e.keyCode === 38) {
			console.log("up");
			this.setState({ top: this.state.top - 5 });
		} //up arrow
		if (e.keyCode === 39) {
			console.log("right");
			this.setState({ left: this.state.left + 5 });
		} //right arrow
		if (e.keyCode === 40) {
			console.log("down");
			this.setState({ top: this.state.top + 5 });
		} //down arrow
	};

	render() {
		const translateStyle = {
			transform: `translate(${this.state.left}px, ${this.state.top}px)`
		};
		return <div id="user" style={translateStyle} autofocus />;
	}
}

export default User;
