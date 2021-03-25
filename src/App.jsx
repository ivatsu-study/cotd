// @flow
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): any {
	const text: string = "Learn React";
	const number = "2";
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Edit <code>src/App.js</code> and save to reload.</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{text}
				</a>
			</header>
		</div>
	);
}

export default App;
