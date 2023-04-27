import { Flex } from '@chakra-ui/react'

const Column = ({ state }) => {
	return (
		<Flex
			color={'white'}
			bg='COLOR-GRAY-DARK'
			minHeight={'20rem'}
			direction={'row'}
			justify={'center'}
		>
			{state}
		</Flex>
	)
}

export default Column
