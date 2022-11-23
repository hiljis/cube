import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	colorMenuIsOpen: false,
	settingsMenuIsOpen: false,
	activeColorMenuItem: 'none',
	cubeToEdit: 'main',
	status: 'idle',
};

export const menuesSlice = createSlice({
	name: 'menues',
	initialState,
	reducers: {
		toggleThemeMenu: (state) => {
			state.colorMenuIsOpen = !state.colorMenuIsOpen;
		},
		toggleSettingsMenu: (state) => {
			state.settingsMenuIsOpen = !state.settingsMenuIsOpen;
		},
		setActiveColorMenuItem: (state, action) => {
			state.activeColorMenuItem = action.payload;
		},
		setCubeToEdit: (state, action) => {
			state.cubeToEdit = action.payload;
		},
	},
});

export const { toggleThemeMenu, toggleSettingsMenu, setActiveColorMenuItem, setCubeToEdit } = menuesSlice.actions;

export const selectColorMenuIsOpen = (state) => state.menues.colorMenuIsOpen;
export const selectSettingsMenuIsOpen = (state) => state.menues.settingsMenuIsOpen;
export const selectActiveColorMenuItem = (state) => state.menues.activeColorMenuItem;
export const selectCubeToEdit = (state) => state.menues.cubeToEdit;

export default menuesSlice.reducer;
