import { Divider, Flex, Heading } from '@chakra-ui/react'

const Column = ({ state }) => {
	return (
		<Flex
			color={'white'}
			bg='COLOR-GRAY-DARK'
			minHeight={'20rem'}
			direction={'column'}
			width={'30%'}
			maxWidth={'20rem'}
			align={'center'}
			borderRadius={'1rem'}
			margin={'1rem'}
		>
			<Heading size={'md'} py={'0.5rem'}>
				{state}
			</Heading>
			<Divider width={'80%'} />
		</Flex>
	)
}

export default Column
