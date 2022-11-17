import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	themeMenuIsOpen: false,
	settingsMenuIsOpen: false,
	status: 'idle',
};

export const menuesSlice = createSlice({
	name: 'menues',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		toggleThemeMenu: (state) => {
			state.themeMenuIsOpen = !state.themeMenuIsOpen;
		},
		toggleSettingsMenu: (state) => {
			state.settingsMenuIsOpen = !state.settingsMenuIsOpen;
		},
	},
});

export const { toggleThemeMenu, toggleSettingsMenu } = menuesSlice.actions;

export const selectThemeMenuIsOpen = (state) => state.menues.themeMenuIsOpen;
export const selectSettingsMenuIsOpen = (state) =>
	state.menues.settingsMenuIsOpen;

export default menuesSlice.reducer;
