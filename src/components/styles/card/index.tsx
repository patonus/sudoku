import styled from 'styled-components/macro'

export const Card = styled.div`
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 1rem;
	display: flex;
	/* flex: 1; */
	flex-direction: column;
	/* max-height: fit-content; */
	padding: 1rem;
`
