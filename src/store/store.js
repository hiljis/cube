import { configureStore } from '@reduxjs/toolkit';
import cubeReducer from './cube/cubeSlice.js';
import themeReducer from './theme/themeSlice.js';
import menuReducer from './menu/menuSlice.js';

export const store = configureStore({
	reducer: {
		cube: cubeReducer,
		theme: themeReducer,
		menu: menuReducer,
	},
});
