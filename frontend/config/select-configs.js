
export const defaultSelectConfig = {
	control: (provided, state) => ({
		width: '100%',
		outline: 'none',
		boxShadow: 'none',
		border: '1px solid hsl(214, 15%, 91%)',
		alignItems: 'center',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		minHeight: '38px',
		position: 'relative',
		transition: 'all 100ms',
		boxSizing: 'border-box',
		backgroundColor: 'white',
		borderRadius: '6px',
		'&hover': {
			border: '1px solid red',
		},
	}),
	container: (provided, state) => ({
		...provided,
		outline: 'none',
		border: 'none'
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