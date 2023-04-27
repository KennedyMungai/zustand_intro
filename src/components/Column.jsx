import { Box } from '@chakra-ui/react'

const Column = ({ state }) => {
	return (
		<Box color={'white'} bg='COLOR-GRAY-DARK' minHeight={'20rem'}>
			{state}
		</Box>
	)
}

export default Column
