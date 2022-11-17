import styled, { css } from 'styled-components';
import { ReactComponent as SettingsIconFilled } from '../assets/icons/svgs/settings-sharp.svg';
import { ReactComponent as SettingsIconOutlined } from '../assets/icons/svgs/settings-outline.svg';
import { ReactComponent as CubeIconFilled } from '../assets/icons/svgs/cube.svg';
import { ReactComponent as CubeIconOutlined } from '../assets/icons/svgs/cube-outline.svg';
import { ReactComponent as ShapeRoundIconOutlined } from '../assets/icons/svgs/shape-round-outline.svg';
import { ReactComponent as ShapeSquareIconOutlined } from '../assets/icons/svgs/shape-square-outline.svg';
import { ReactComponent as LockClosedIconOutlined } from '../assets/icons/svgs/lock-closed-outline.svg';
import { ReactComponent as LockOpenIconOutlined } from '../assets/icons/svgs/lock-open-outline.svg';

const svgStylesFilled = ({ height, color, hovercolor }) => {
	return css`
		height: ${height || '40px'};
		margin: auto;

		& path {
			fill: ${color || 'white'};
		}

		&:hover path {
			fill: ${hovercolor || 'blue'};
		}
	`;
};

const svgStylesOutlined = ({ height, color, hovercolor }) => {
	return css`
		height: ${height || '40px'};
		margin: auto;

		& path {
			stroke: ${color || 'white'};
		}

		&:hover path {
			stroke: ${hovercolor || 'blue'};
		}
	`;
};

export const StyledSettingsIconFilled = styled(SettingsIconFilled)`
	${(props) => svgStylesFilled(props)};
`;

export const StyledSettingsIconOutlined = styled(SettingsIconOutlined)`
	${(props) => svgStylesOutlined(props)};
`;

export const StyledCubeIconFilled = styled(CubeIconFilled)`
	${(props) => svgStylesFilled(props)};
`;

export const StyledCubeIconOutlined = styled(CubeIconOutlined)`
	${(props) => svgStylesOutlined(props)};
`;

export const StyledRoundIconOutlined = styled(ShapeRoundIconOutlined)`
	${(props) => svgStylesOutlined(props)};
`;

export const StyledSquareIconOutlined = styled(ShapeSquareIconOutlined)`
	${(props) => svgStylesOutlined(props)};
`;

export const StyledLockClosedIconOutlined = styled(LockClosedIconOutlined)`
	${(props) => svgStylesOutlined(props)};
`;

export const StyledLockOpenIconOutlined = styled(LockOpenIconOutlined)`
	${(props) => svgStylesOutlined(props)};
`;
