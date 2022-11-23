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
		shadeColor: '0,0,0',
		baseColor: '0,0,255',
		edgeColor: '0,0,255',
		shadeColorOpacity: 100,
		baseColorOpacity: 100,
		edgeColorOpacity: 100,
		activeColorTarget: 'base',
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
		shadeColor: '0,0,0',
		baseColor: '0,0,255',
		edgeColor: '255,255,255',
		shadeColorOpacity: 100,
		baseColorOpacity: 100,
		edgeColorOpacity: 100,
		activeColorTarget: 'base',
	},
	glowAmount: INIT_GLOW,
	glowColor: '0,0,255',
	glowColorOpacity: 20,
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
			if (state[state.active].width < MAX_WIDTH) state[state.active].width += WIDTH_INCREMENT;
		},
		decrementWidth: (state) => {
			if (state[state.active].width > MIN_WIDTH) state[state.active].width -= WIDTH_INCREMENT;
		},
		incrementHeight: (state) => {
			if (state[state.active].height < MAX_HEIGHT) state[state.active].height += HEIGHT_INCREMENT;
		},
		decrementHeight: (state) => {
			if (state[state.active].height > MIN_HEIGHT) state[state.active].height -= HEIGHT_INCREMENT;
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
		setGlowAmount: (state, action) => {
			state.glowAmount = action.payload;
		},
		setGlowColor: (state, action) => {
			state.glowColor = action.payload;
		},
		setGlowColorOpacity: (state, action) => {
			state.glowColorOpacity = action.payload;
		},
		setShadeColor: (state, action) => {
			const { cube, color } = action.payload;
			if (cube === 'main') state.main.shadeColor = color;
			else state.secondary.shadeColor = color;
		},
		setBaseColor: (state, action) => {
			const { cube, color } = action.payload;
			if (cube === 'main') state.main.baseColor = color;
			else state.secondary.baseColor = color;
		},
		setEdgeColor: (state, action) => {
			state[state.active].edgeColor = action.payload;
		},
		setShadeColorOpacity: (state, action) => {
			state[state.active].shadeColorOpacity = action.payload;
		},
		setBaseColorOpacity: (state, action) => {
			state[state.active].mainColorOpacity = action.payload;
		},
		setEdgeColorOpacity: (state, action) => {
			state[state.active].edgeColorOpacity = action.payload;
		},
		setActiveColorTarget: (state, action) => {
			state[state.active].activeColorTarget = action.payload;
		},
		setActiveColorTargetOpacity: (state, action) => {
			if (state[state.active].activeColorTarget === 'base') state[state.active].baseColorOpacity = action.payload;
			else if (state[state.active].activeColorTarget === 'shade')
				state[state.active].shadeColorOpacity = action.payload;
			else if (state[state.active].activeColorTarget === 'edge')
				state[state.active].edgeColorOpacity = action.payload;
			else if (state[state.active].activeColorTarget === 'glow') state.glowColorOpacity = action.payload;
		},
		setActiveColorTargetColor: (state, action) => {
			if (state[state.active].activeColorTarget === 'base') state[state.active].baseColor = action.payload;
			else if (state[state.active].activeColorTarget === 'shade') state[state.active].shadeColor = action.payload;
			else if (state[state.active].activeColorTarget === 'edge') state[state.active].edgeColor = action.payload;
			else if (state[state.active].activeColorTarget === 'glow') state.glowColor = action.payload;
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
	setGlowAmount,
	setGlowColor,
	setGlowColorOpacity,
	setShadeEffect,
	addSecondary,
	removeSecondary,
	setIsRounded,
	setIsEdgeLocked,
	setEdgeColor,
	setBaseColor,
	setShadeColor,
	setShadeColorOpacity,
	setBaseColorOpacity,
	setEdgeColorOpacity,
	setActiveColorTarget,
	setActiveColorTargetOpacity,
	setActiveColorTargetColor,
} = cubeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectActiveCube = (state) => state.cube.active;
export const selectMainCube = (state) => state.cube.main;
export const selectSecondaryCube = (state) => state.cube.secondary;

export const selectWidth = (state, cube) => {
	if (cube === 'main') return state.cube.main.width;
	if (cube === 'secondary') return state.cube.secondary.width;
	else return state.cube[state.cube.active].width;
};

export const selectHeight = (state, cube) => {
	if (cube === 'main') return state.cube.main.height;
	if (cube === 'secondary') return state.cube.secondary.height;
	else return state.cube[state.cube.active].height;
};

export const selectIsSolid = (state, cube) => {
	if (cube === 'main') return state.cube.main.isSolid;
	if (cube === 'secondary') return state.cube.secondary.isSolid;
	else return state.cube[state.cube.active].isSolid;
};

export const selectIsEdgeLocked = (state, cube) => {
	if (cube === 'main') return state.cube.main.isEdgeLocked;
	if (cube === 'secondary') return state.cube.secondary.isEdgeLocked;
	else return state.cube[state.cube.active].isEdgeLocked;
};

export const selectIsRounded = (state, cube) => {
	if (cube === 'main') return state.cube.main.isRounded;
	if (cube === 'secondary') return state.cube.secondary.isRounded;
	else return state.cube[state.cube.active].isRounded;
};

export const selectSpacing = (state, cube) => {
	if (cube === 'main') return state.cube.main.spacing;
	if (cube === 'secondary') return state.cube.secondary.spacing;
	else return state.cube[state.cube.active].spacing;
};

export const selectOpacity = (state, cube) => {
	if (cube === 'main') return state.cube.main.opacity;
	if (cube === 'secondary') return state.cube.secondary.opacity;
	else return state.cube[state.cube.active].opacity;
};

export const selectShadeEffect = (state, cube) => {
	if (cube === 'main') return state.cube.main.shadeEffect;
	if (cube === 'secondary') return state.cube.secondary.shadeEffect;
	else return state.cube[state.cube.active].shadeEffect;
};

export const selectRenderSecondary = (state) => state.cube.secondary.render;
export const selectGlowAmount = (state) => state.cube.glowAmount;
export const selectGlowColor = (state) => state.cube.glowColor;
export const selectGlowColorOpacity = (state) => state.cube.glowColorOpacity;

export const selectBaseColor = (state, cube) => {
	if (cube === 'main') return state.cube.main.baseColor;
	if (cube === 'secondary') return state.cube.secondary.mainColor;
	else return state.cube[state.cube.active].mainColor;
};
export const selectEdgeColor = (state, cube) => {
	if (cube === 'main') return state.cube.main.edgeColor;
	if (cube === 'secondary') return state.cube.secondary.edgeColor;
	else return state.cube[state.cube.active].edgeColor;
};
export const selectShadeColor = (state, cube) => {
	if (cube === 'main') return state.cube.main.shadeColor;
	if (cube === 'secondary') return state.cube.secondary.shadeColor;
	else return state.cube[state.cube.active].shadeColor;
};

export const selectBaseColorOpacity = (state, cube) => {
	if (cube === 'main') return state.cube.main.baseColorOpacity;
	if (cube === 'secondary') return state.cube.secondary.mainColorOpacity;
	else return state.cube[state.cube.active].mainColorOpacity;
};
export const selectEdgeColorOpacity = (state, cube) => {
	if (cube === 'main') return state.cube.main.edgeColorOpacity;
	if (cube === 'secondary') return state.cube.secondary.edgeColorOpacity;
	else return state.cube[state.cube.active].edgeColorOpacity;
};
export const selectShadeColorOpacity = (state, cube) => {
	if (cube === 'main') return state.cube.main.shadeColorOpacity;
	if (cube === 'secondary') return state.cube.secondary.shadeColorOpacity;
	else return state.cube[state.cube.active].shadeColorOpacity;
};

export const selectActiveColorTarget = (state) => state.cube[state.cube.active].activeColorTarget;

export const selectActiveColorTargetColor = (state) => {
	const activeColorTarget = state.cube[state.cube.active].activeColorTarget;
	if (activeColorTarget === 'base') return state.cube[state.cube.active].baseColor;
	else if (activeColorTarget === 'shade') return state.cube[state.cube.active].shadeColor;
	else if (activeColorTarget === 'edge') return state.cube[state.cube.active].edgeColor;
	else if (activeColorTarget === 'glow') return state.cube.glowColor;
};

export const selectActiveColorTargetOpacity = (state) => {
	const activeColorTarget = state.cube[state.cube.active].activeColorTarget;
	if (activeColorTarget === 'base') return state.cube[state.cube.active].baseColorOpacity;
	else if (activeColorTarget === 'shade') return state.cube[state.cube.active].shadeColorOpacity;
	else if (activeColorTarget === 'edge') return state.cube[state.cube.active].edgeColorOpacity;
	else if (activeColorTarget === 'glow') return state.cube.glowColorOpacity;
};

export default cubeSlice.reducer;
