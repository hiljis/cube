import React from 'react';
import { Cubes } from './components/cube/cubes.component.jsx';
import './App.css';
import { BurgerButton } from './components/burgerButton/burgerButton.component';
import { ControlButton } from './components/controlButton/controlButton.component';
import { Grid } from './components/grid/grid.component';
import { ThemeMenu } from './components/themeMenu/themeMenu.component';
import { SettingsMenu } from './components/settingsMenu/settingsMenu.component.jsx';
import { ToggleSettingsButton } from './components/settingsMenu/toggleSettingsButton/toggleSettingsButton.component.jsx';
import { Welcome } from './components/welcome/welcome.component.jsx';

function App() {
	return (
		<div className="App">
			<Welcome />
			<Grid>
				<ThemeMenu />
				<BurgerButton />
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
