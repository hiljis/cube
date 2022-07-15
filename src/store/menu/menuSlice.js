import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
	status: 'idle',
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		toggleMenu: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { toggleMenu } = menuSlice.actions;

export const selectMenuIsOpen = (state) => state.menu.isOpen;

export default menuSlice.reducer;
