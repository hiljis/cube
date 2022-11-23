import { useDispatch, useSelector } from 'react-redux';
import { selectSpacingActive, setSpacing } from '../../store/cube/cubeSlice';
import { Slider } from './slider.component';

export const SliderSpacing = () => {
	const spacingValue = useSelector(selectSpacingActive);
	const dispatch = useDispatch();

	const handleOnInput = (e) => {
		dispatch(setSpacing(e.target.value));
	};

	return <Slider title="spacing" min={0} max={500} value={spacingValue} inputHandler={handleOnInput} step={50} />;
};
