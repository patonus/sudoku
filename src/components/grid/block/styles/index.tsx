import styled from 'styled-components/macro'

export const Container = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.white};
	border: solid 1px ${({ theme }) => theme.colors.black};
	cursor: pointer;
	display: flex;
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 0;
	font-weight: bold;
	font-size: 1.25rem;
	height: auto;
	justify-content: center;
	transition: ${({ theme }) => theme.transition};
	user-select: none;

	&:before {
		padding-top: 100%;
		content: '';
		float: left;
	}
	&:hover {
		background-color: ${({ theme }) => theme.colors.lightBlue};
	}
`
