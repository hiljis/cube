import { configureStore } from '@reduxjs/toolkit';
import cubeReducer from './cube/cubeSlice.js';
import menuesReducer from './menues/menuesSlice.js';

export const store = configureStore({
	reducer: {
		cube: cubeReducer,
		menues: menuesReducer,
	},
});
