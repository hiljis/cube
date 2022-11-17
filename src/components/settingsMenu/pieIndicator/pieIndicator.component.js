import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectGlow,
	selectOpacityActive,
	selectShadeEffectActive,
	selectSpacingActive,
	setGlow,
	setOpacity,
	setShadeEffect,
	setSpacing,
} from '../../../store/cube/cubeSlice.js';
import { store } from '../../../store/store.js';
import './pieIndicator.styles.js';
import {
	DraggableInvisibleOverlay,
	Pie,
	PieContainer,
} from './pieIndicator.styles.js';

const TARGET_OPACITY = 'opacity';
const TARGET_SPACING = 'spacing';
const TARGET_SHADE_EFFECT = 'shadeEffect';
const TARGET_GLOW = 'glow';

const getActionFunc = (target) => {
	switch (target) {
		case TARGET_OPACITY:
			return setOpacity;
		case TARGET_SPACING:
			return setSpacing;
		case TARGET_SHADE_EFFECT:
			return setShadeEffect;
		case TARGET_GLOW:
			return setGlow;
		default:
			return null;
	}
};

const getSelector = (target) => {
	switch (target) {
		case TARGET_OPACITY:
			return selectOpacityActive;
		case TARGET_SPACING:
			return selectSpacingActive;
		case TARGET_SHADE_EFFECT:
			return selectShadeEffectActive;
		case TARGET_GLOW:
			return selectGlow;
		default:
			return null;
	}
};

export const PieIndicator = ({ min, max, initValue, target }) => {
	const valueStore = useSelector(getSelector(target));

	const dispatch = useDispatch();
	const [value, setValue] = useState(initValue);
	const [previous, setPrevious] = useState(0);
	const [current, setCurrent] = useState(0);
	const [cursor, setCursor] = useState('grab');
	const action = getActionFunc(target);

	const handleOnDragStart = (e) => {
		setCursor('grabbing');
		setPrevious(e.clientY);
	};

	const handleOnDragEnd = (e) => {
		setCursor('grab');
		setPrevious(0);
		setCurrent(0);
	};

	const handleOnDrag = (e) => {
		setCurrent(e.clientY);
		const diff = current - previous;
		const nextValue = Math.trunc(value - diff);

		if (nextValue >= max || nextValue <= min) {
			return;
		}
		setPrevious(current);
		setValue(nextValue);
		// dispatch(action(nextValue));
	};

	return (
		<PieContainer>
			<Pie value={value}>
				<span>{value}</span>
			</Pie>
			<DraggableInvisibleOverlay
				cursor={cursor}
				draggable="true"
				onDragStart={handleOnDragStart}
				onDrag={handleOnDrag}
				onDragEnd={handleOnDragEnd}
			/>
		</PieContainer>
	);
};
