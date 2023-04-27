import { Box, Tag, Text } from '@chakra-ui/react'
import { useStore } from '../store'

const STATUS = 'PLANNED'

const Task = ({ title }) => {
	const task = useStore((store) => store.tasks.find((t) => t.title === title))

	return (
		<Box
			w={'90%'}
			border={'1px solid'}
			borderColor={'whiteAlpha.500'}
			borderRadius={'0.5rem'}
		>
			<Tag
				size={'sm'}
				position={'absolute'}
				bg={'bg-COLOR-PLANNED'}
				fontWeight={'bold'}
				fontSize={'0.6rem'}
			>
				{STATUS}
			</Tag>
			<Text p={'0.5rem'} textAlign={'center'}>
				{task.title}
			</Text>
		</Box>
	)
}

export default Task
