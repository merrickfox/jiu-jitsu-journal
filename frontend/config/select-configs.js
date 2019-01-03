
export const defaultSelectConfig = {
	control: (provided, state) => ({
		...provided,
		'&:hover': {
			border: '1px solid hsl(211, 13%, 65%)'
		},
		width: '100%',
		outline: 'none',
		boxShadow: 'none',
		border: '1px solid hsl(214, 15%, 91%)',
		alignItems: 'center',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		maxHeight: '48px',
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
}


// {
// 	width: '100%',
// 		outline: 'none',
// 	boxShadow: 'none',
// 	border: '1px solid hsl(214, 15%, 91%)',
// 	alignItems: 'center',
// 	display: 'flex',
// 	flexWrap: 'wrap',
// 	justifyContent: 'space-between',
// 	minHeight: '38px',
// 	position: 'relative',
// 	transition: 'all 100ms',
// 	boxSizing: 'border-box',
// 	'&hover': {
// 	border: '1px solid hsl(211, 13%, 65%) !important',
// 		boxShadow: 'none',
// },
// }