import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

	html {
		box-sizing: border-box;
	}

	*, *::after, *::before {
		box-sizing: inherit;
	}
	
	body {
		margin: 0;
		font-family: 'Montserrat', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.colors.darkGrey};
		letter-spacing: -0.02em;
	}

	a, button {
		font-family: 'Montserrat', sans-serif;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
	}

	p {
		margin: 0;
		color: ${({ theme }) => theme.colors.darkGrey};
	}

	h1,h2,h3,h4,h5,h6 {
		margin: 0;
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;

export const chooseFont = (value = '"Montserrat", sans-serif') => `
	font-family: ${value};
`;
