import { Divider, Flex, Heading, VStack } from '@chakra-ui/react'
import { shallow } from 'zustand/shallow'
import { useStore } from '../store'
import Task from './Task'

const Column = ({ state }) => {
	const tasks = useStore(
		(store) => store.tasks.filter((task) => task.state === state),
		shallow
	)

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
			<VStack spacing={'0.5rem'} p={'1rem'} w={'100%'}>
				{tasks.map((task) => (
					<Task title={task.title} key={task.title} />
				))}
			</VStack>
		</Flex>
	)
}

export default Column
