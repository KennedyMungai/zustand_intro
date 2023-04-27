import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	colors: {
		'COLOR-GRAY': '#333',
		'COLOR-GRAY-DARK': '#222',
		'COLOR-GRAY-LIGHT': '#ccc',
		'COLOR-ONGOING': '#98c1d9',
		'COLOR-DONE': '#ee6c4d',
		'bg-COLOR-PLANNED': '#FFAA4499',
		'bg-COLOR-ONGOING': '#FF667799',
		'bg-COLOR-DONE': '#77228899'
	},
	fonts: {
		heading: 'roboto, sans-serif',
		body: 'roboto, sans-serif'
	}
})

export default theme
