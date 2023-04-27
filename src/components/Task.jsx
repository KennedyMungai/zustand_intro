import { Box, Tag, Text } from '@chakra-ui/react'

const STATUS = 'PLANNED'

const Task = ({ title }) => {
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
				color={'gray.700'}
			>
				{STATUS}
			</Tag>
			<Text p={'0.5rem'} textAlign={'center'}>
				{title}
			</Text>
		</Box>
	)
}

export default Task
