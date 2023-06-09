import { Flex } from '@chakra-ui/react'
import Column from './components/Column'

function App() {
	return (
		<Flex
			bg={'COLOR-GRAY'}
			height={'100vh'}
			width={'100vw'}
			justify={'center'}
		>
			<Flex width={'90%'} p={'2rem'} justify={'center'}>
				<Column state='PLANNED' />
				<Column state='ONGOING' />
				<Column state='DONE' />
			</Flex>
		</Flex>
	)
}

export default App
