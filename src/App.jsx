import { Box } from '@chakra-ui/react'
import Column from './components/Column'

function App() {
	return (
		<Box bg={'COLOR-GRAY'} height={'100vh'} width={'100vw'}>
			<Column state='PLANNED' />
			<Column state='ONGOING' />
			<Column state='DONE' />
		</Box>
	)
}

export default App
