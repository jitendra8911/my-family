import styled from 'styled-components';

interface IProps {
  open: boolean;
  theme: any;
}

const StyledMenu = styled.nav<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    // color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;
export default StyledMenu;
