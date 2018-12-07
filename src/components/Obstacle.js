import React from "react";
class Obstacle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "",
			type: "",
			moving: false,
			harmful: false
		};
	}

	init() {}

	render() {
		return <div className="obstacle" />;
	}
}
export default Obstacle;
