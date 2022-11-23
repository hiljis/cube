import { useDispatch, useSelector } from 'react-redux';
import { selectOpacityActive, setOpacity } from '../../store/cube/cubeSlice';
import { Slider } from './slider.component';

export const SliderOpacity = () => {
	const opacityVal = useSelector(selectOpacityActive);
	const dispatch = useDispatch();

	const handleOnInput = (e) => {
		console.log('opacity');
		dispatch(setOpacity(e.target.value));
	};

	return <Slider title="opacity" min={0} max={100} value={opacityVal} inputHandler={handleOnInput} step={10} />;
};
