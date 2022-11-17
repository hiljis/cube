import { createSlice } from '@reduxjs/toolkit';

import {
	INIT_ACTIVE,
	INIT_GLOW,
	MAIN_INIT_WIDTH,
	MAIN_INIT_HEIGHT,
	MAIN_INIT_OPACITY,
	MAIN_INIT_SPACING,
	MAIN_INIT_SHADE_EFFECT,
	MAIN_INIT_IS_SOLID,
	MAIN_INIT_IS_EDGE_LOCKED,
	MAIN_INIT_IS_ROUNDED,
	SECONDARY_INIT_WIDTH,
	SECONDARY_INIT_HEIGHT,
	SECONDARY_INIT_OPACITY,
	SECONDARY_INIT_SPACING,
	SECONDARY_INIT_SHADE_EFFECT,
	SECONDARY_INIT_IS_SOLID,
	SECONDARY_INIT_IS_EDGE_LOCKED,
	SECONDARY_INIT_IS_ROUNDED,
	SECONDARY_INIT_RENDER,
} from './cubeInitValues';

const initialState = {
	main: {
		width: MAIN_INIT_WIDTH,
		height: MAIN_INIT_HEIGHT,
		isSolid: MAIN_INIT_IS_SOLID,
		spacing: MAIN_INIT_SPACING,
		opacity: MAIN_INIT_OPACITY,
		isRounded: MAIN_INIT_IS_ROUNDED,
		isEdgeLocked: MAIN_INIT_IS_EDGE_LOCKED,
		shadeEffect: MAIN_INIT_SHADE_EFFECT,
	},
	secondary: {
		width: SECONDARY_INIT_WIDTH,
		height: SECONDARY_INIT_HEIGHT,
		isSolid: SECONDARY_INIT_IS_SOLID,
		spacing: SECONDARY_INIT_SPACING,
		opacity: SECONDARY_INIT_OPACITY,
		isRounded: SECONDARY_INIT_IS_ROUNDED,
		isEdgeLocked: SECONDARY_INIT_IS_EDGE_LOCKED,
		shadeEffect: SECONDARY_INIT_SHADE_EFFECT,
		render: SECONDARY_INIT_RENDER,
	},
	glow: INIT_GLOW,
	active: INIT_ACTIVE,
};

const MAX_WIDTH = 500;
const MIN_WIDTH = 0;
const WIDTH_INCREMENT = 50;

const MAX_HEIGHT = 500;
const MIN_HEIGHT = 0;
const HEIGHT_INCREMENT = 50;

export const cubeSlice = createSlice({
	name: 'cube',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		incrementWidth: (state) => {
			if (state[state.active].width < MAX_WIDTH)
				state[state.active].width += WIDTH_INCREMENT;
		},
		decrementWidth: (state) => {
			if (state[state.active].width > MIN_WIDTH)
				state[state.active].width -= WIDTH_INCREMENT;
		},
		incrementHeight: (state) => {
			if (state[state.active].height < MAX_HEIGHT)
				state[state.active].height += HEIGHT_INCREMENT;
		},
		decrementHeight: (state) => {
			if (state[state.active].height > MIN_HEIGHT)
				state[state.active].height -= HEIGHT_INCREMENT;
		},
		setWidth: (state, action) => {
			state[state.active].width = action.payload;
		},
		setHeight: (state, action) => {
			state[state.active].height = action.payload;
		},
		setIsSolid: (state, action) => {
			state[state.active].isSolid = action.payload;
		},
		toggleEdgeLock: (state) => {
			console.log('toggleEdgeLock should not be in use');
		},
		setIsEdgeLocked: (state, action) => {
			state[state.active].isEdgeLocked = action.payload;
		},
		toggleHasRoundSides: (state) => {
			console.log('toggleHasRoundSides should not be in use');
		},
		setIsRounded: (state, action) => {
			state[state.active].isRounded = action.payload;
		},
		setSpacing: (state, action) => {
			state[state.active].spacing = action.payload;
		},
		setOpacity: (state, action) => {
			state[state.active].opacity = action.payload;
		},
		setShadeEffect: (state, action) => {
			state[state.active].shadeEffect = action.payload;
		},
		toggleSecondary: (state) => {
			console.log('toggleSecondary should not be in use');
		},
		addSecondary: (state) => {
			state.secondary.render = true;
		},
		removeSecondary: (state) => {
			state.secondary.render = false;
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
	setIsSolid,
	toggleEdgeLock,
	toggleHasRoundSides,
	setSpacing,
	setOpacity,
	toggleSecondary,
	setActive,
	setGlow,
	setShadeEffect,
	addSecondary,
	removeSecondary,
	setIsRounded,
	setIsEdgeLocked,
} = cubeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectActiveCube = (state) => state.cube.active;

export const selectWidthMain = (state) => state.cube.main.width;
export const selectWidthSecondary = (state) => state.cube.secondary.width;

export const selectHeightMain = (state) => state.cube.main.height;
export const selectHeightSecondary = (state) => state.cube.secondary.height;

export const selectIsSolidMain = (state) => state.cube.main.isSolid;
export const selectIsSolidSecondary = (state) => state.cube.secondary.isSolid;
export const selectIsSolidActive = (state) =>
	state.cube[state.cube.active].isSolid;

export const selectIsEdgeLockedMain = (state) => state.cube.main.isEdgeLocked;
export const selectIsEdgeLockedSecondary = (state) =>
	state.cube.secondary.isEdgeLocked;
export const selectIsEdgeLockedActive = (state) =>
	state.cube[state.cube.active].isEdgeLocked;

export const selectIsRoundedMain = (state) => state.cube.main.isRounded;
export const selectIsRoundedSecondary = (state) =>
	state.cube.secondary.isRounded;
export const selectIsRoundedActive = (state) =>
	state.cube[state.cube.active].isRounded;

export const selectSpacingMain = (state) => state.cube.main.spacing;
export const selectSpacingSecondary = (state) => state.cube.secondary.spacing;
export const selectSpacingActive = (state) =>
	state.cube[state.cube.active].spacing;

export const selectOpacityMain = (state) => state.cube.main.opacity;
export const selectOpacitySecondary = (state) => state.cube.secondary.opacity;
export const selectOpacityActive = (state) =>
	state.cube[state.cube.active].opacity;

export const selectShadeEffectMain = (state) => state.cube.main.shadeEffect;
export const selectShadeEffectSecondary = (state) =>
	state.cube.secondary.shadeEffect;
export const selectShadeEffectActive = (state) =>
	state.cube[state.cube.active].shadeEffect;

export const selectRenderSecondary = (state) => state.cube.secondary.render;
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
