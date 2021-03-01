import { Container } from './styles'

interface Props {
	colIndex: number
	rowIndex: number
}

const Block = ({ colIndex, rowIndex }: Props) => {
	return <Container>{rowIndex}</Container>
}
export default Block
