import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	colors: {
		'COLOR-GRAY': '#333',
		'COLOR-GRAY-DARK': '#222',
		'COLOR-GRAY-LIGHT': '#ccc',
		'COLOR-ONGOING': '#98c1d9',
		'COLOR-DONE': '#ee6c4d',
		'bg-COLOR-PLANNED': '#FFAA44AA',
		'bg-COLOR-ONGOING': '#FF6677AA',
		'bg-COLOR-DONE': '#772288AA'
	},
	fonts: {
		heading: 'roboto, sans-serif',
		body: 'roboto, sans-serif'
	}
})

export default theme
