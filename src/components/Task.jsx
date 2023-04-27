import { Text, Box } from '@chakra-ui/react'

const Task = ({ title }) => {
	return (
		<Box
			w={'90%'}
			border={'1px solid'}
			borderColor={'whiteAlpha.500'}
			borderRadius={'0.5rem'}
		>
			<Text p={'0.5rem'} textAlign={'center'}>
				{title}
			</Text>
		</Box>
	)
}

export default Task
