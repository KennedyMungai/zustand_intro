import { Text } from '@chakra-ui/react'

const Task = ({ title }) => {
	return (
		<Text
			border={'1px solid'}
			borderColor={'whiteAlpha.300'}
			p={'0.5rem'}
			textAlign={'center'}
		>
			{title}
		</Text>
	)
}

export default Task
