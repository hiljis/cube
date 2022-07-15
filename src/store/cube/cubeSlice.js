import { createSlice } from '@reduxjs/toolkit';

// interface CubeState {
// 	rotationX: number;
// 	rotationY: number;
// 	isSolid: boolean;
// 	scale: number;
// 	glow: number;
// 	hasChild: boolean;
// 	expansion: number;
// }

const initialState = {
	parent: {
		width: 100,
		height: 100,
		isSolid: false,
		scale: 1,
		margin: 50,
		opacity: 100,
		mounted: true,
	},
	child: {
		width: 50,
		height: 50,
		isSolid: false,
		scale: 1,
		margin: 25,
		opacity: 100,
		mounted: true,
	},
	glow: 1,
	active: 'parent',
};

export const cubeSlice = createSlice({
	name: 'cube',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		incrementWidth: (state) => {
			state[state.active].width += 50;
		},
		decrementWidth: (state) => {
			state[state.active].width -= 50;
		},
		incrementHeight: (state) => {
			state[state.active].height += 50;
		},
		decrementHeight: (state) => {
			state[state.active].height -= 50;
		},
		setWidth: (state, action) => {
			state[state.active].width = action.payload;
		},
		setHeight: (state, action) => {
			state[state.active].height = action.payload;
		},
		toggleSolid: (state) => {
			state[state.active].isSolid = !state[state.active].isSolid;
		},
		setScale: (state, action) => {
			state[state.active].scale = action.payload;
		},
		setMargin: (state, action) => {
			state[state.active].margin = action.payload;
		},
		setOpacity: (state, action) => {
			state[state.active].opacity = action.payload;
		},
		toggleMounted: (state, action) => {
			state[action.payload].mounted = !state[action.payload].mounted;
		},
		setActive: (state, action) => {
			state.active = action.payload;
		},
		setGlow: (state, action) => {
			state.glow = action.payload;
		},
	},
});

export const {
	setWidth,
	setHeight,
	incrementWidth,
	decrementWidth,
	incrementHeight,
	decrementHeight,
	toggleSolid,
	setScale,
	setMargin,
	setOpacity,
	toggleMounted,
	setActive,
	setGlow,
} = cubeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectActiveCube = (state) => state.cube.active;
export const selectWidth = (state) => state.cube[state.cube.active].width;
export const selectHeight = (state) => state.cube[state.cube.active].height;
export const selectIsSolid = (state) => state.cube[state.cube.active].isSolid;
export const selectScale = (state) => state.cube[state.cube.active].scale;
export const selectMargin = (state) => state.cube[state.cube.active].margin;
export const selectOpacity = (state) => state.cube[state.cube.active].opacity;
export const selectMounted = (state) => state.cube[state.cube.active].mounted;
export const selectGlow = (state) => state.cube.glow;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
// 	const currentValue = selectCount(getState());
// 	if (currentValue % 2 === 1) {
// 		dispatch(incrementByAmount(amount));
// 	}
// };

export default cubeSlice.reducer;
