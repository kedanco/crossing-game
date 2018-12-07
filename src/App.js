import React, { Component } from "react";
import "./App.css";
import User from "./components/User";
import Enemy from "./components/Enemy";
import Obstacle from "./components/Obstacle";

const lands = ["backyard", "city"];

class App extends Component {
	spawnEnemy() {
		let amount = Math.floor(Math.random() * 50) + 2;
		let str = Array(amount);

		for (let i = 0; i < amount; i++) {
			str[i] = <Enemy key={i} />;
		}

		return str;
	}

	componentDidMount() {}

	render() {
		return (
			<div className="App" id="wrapper">
				<div id="wrapper-child">
					<div id="map">
						<div id="backyard" className="area">
							{this.spawnEnemy()}
						</div>
						<div id="city" className="area" />
					</div>
					<div id="userContainer">
						<User />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
