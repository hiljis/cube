import React from 'react';
import { Cubes } from './components/cube/cubes.component.jsx';
import './App.css';
import { ControlButton } from './components/controlButton/controlButton.component';
import { Grid } from './components/grid/grid.component';
import { SettingsMenu } from './components/settingsMenu/settingsMenu.component.jsx';
import { ToggleSettingsButton } from './components/settingsMenu/toggleSettingsButton/toggleSettingsButton.component.jsx';
import { Welcome } from './components/welcome/welcome.component.jsx';

function App() {
	return (
		<div className="App">
			<Welcome />
			<Grid>
				<Cubes />
				<ControlButton control="left" />
				<ControlButton control="right" />
				<ControlButton control="up" />
				<ControlButton control="down" />
				<SettingsMenu />
				<ToggleSettingsButton />
			</Grid>
		</div>
	);
}

export default App;
