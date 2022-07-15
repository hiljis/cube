import React from 'react';
import { Cube } from './components/cube/cube.component.jsx';
import './App.css';
import { BurgerButton } from './components/burgerButton/burgerButton.component';
import { ControlButton } from './components/controlButton/controlButton.component';
import { Grid } from './components/grid/grid.component';
import { Menu } from './components/menu/menu.component';
import { CubeSelectorGroup } from './components/cubeSelectorGroup/cubeSelectorGroup.component.jsx';
import { ThemeVariables } from './utils/themeVariables.js';

function App() {
	return (
		<div className="App">
			<ThemeVariables />
			<Grid>
				<Menu />
				<BurgerButton />
				<CubeSelectorGroup />
				<Cube />
				<ControlButton control="left" />
				<ControlButton control="right" />
				<ControlButton control="up" />
				<ControlButton control="down" />
			</Grid>
		</div>
	);
}

export default App;
