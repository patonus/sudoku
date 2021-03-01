import Block from './block'
import { Container, Row } from './styles'

const Grid = () => {
	return (
		<Container>
			{[...Array(9)].map((_, rowIndex) => (
				<Row key={'row-' + rowIndex}>
					{[...Array(9)].map((_, colIndex) => (
						<Block
							key={'block' + colIndex}
							colIndex={colIndex}
							rowIndex={rowIndex}
						/>
					))}
				</Row>
			))}
		</Container>
	)
}
export default Grid
