import { createGlobalStyle } from 'styled-components';

interface IProps {
  theme: any;
}
const GlobalStyles = createGlobalStyle<IProps>`
  .container {
    width: 90%;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 100px 1fr;
    gap: 1rem;
    top: 1rem;
    position: absolute;
  }


  .side-nav {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    align-self: center;
    justify-self: center;
  }

  .top-nav {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: center;
  }

  .content {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .content {
      grid-column: 1 / 4;
    }
    
    body {
      font-size: 1rem;
    }
  }

  .side-nav > div, .side-nav a {
    padding: 2rem;
  }
  
  .top-nav a {
    padding: 1rem;
  }

  .selected {
    color: red;
  }

  .side-nav .selected {
    border-left: 6px solid #2196F3!important;
  }

  .top-nav .selected {
    border-bottom: 6px solid #2196F3!important;
  }
`;

export default GlobalStyles;
