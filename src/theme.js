import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	colors: {
		'COLOR-GRAY': '#333',
		'COLOR-GRAY-DARK': '#222',
		'COLOR-GRAY-LIGHT': '#ccc',
		'COLOR-ONGOING': '#98c1d9',
		'COLOR-DONE': '#ee6c4d',
		'bg-COLOR-PLANNED': '#FFAA44',
		'bg-COLOR-ONGOING': '#FF6677',
		'bg-COLOR-DONE': '#772288'
	},
	fonts: {
		heading: 'roboto, sans-serif',
		body: 'roboto, sans-serif'
	},
	Tag: {
		variants: {
			PLANNED: 'bg-COLOR-PLANNED',
			ONGOING: 'bg-COLOR-ONGOING',
			DONE: 'bg-COLOR-DONE'
		}
	}
})

export default theme
