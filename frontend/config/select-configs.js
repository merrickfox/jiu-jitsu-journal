const hoverBorderColor = 'hsl(211, 13%, 65%)';
const regularBorderColor = 'hsl(214, 15%, 91%)';
const darkText = 'hsl(210, 24%, 16%)';
const selectedBackground = 'hsl(195, 100%, 85%)';
const hoveredBackground = 'hsl(216, 33%, 97%)';


export const defaultSelectConfig = {
	control: (provided, state) => ({
		...provided,
		'&:hover': {
			border: `1px solid ${hoverBorderColor}`
		},
		width: '100%',
		outline: 'none',
		boxShadow: 'none',
		border: `1px solid ${regularBorderColor}`,
		alignItems: 'center',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		height: '48px',
		position: 'relative',
		transition: 'all 100ms',
		boxSizing: 'border-box',
		backgroundColor: 'white',
		borderRadius: '6px',
	}),
	container: (provided, state) => ({
		...provided,
		outline: 'none',
		border: 'none'
	}),
	placeholder: (provided, state) => ({
		...provided,
		color: 'hsl(211, 10%, 53%)'
	}),
	indicatorSeparator: (provided, state) => ({
		...provided,
		backgroundColor: regularBorderColor,
		'&:hover': {
			backgroundColor: hoverBorderColor
		},
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		color: regularBorderColor,
		'&:hover': {
			color: hoverBorderColor
		},
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? selectedBackground : 'white',
		color: darkText,
		'&:hover': {
			backgroundColor: state.isSelected ? selectedBackground : hoveredBackground
		},
	}),
}


