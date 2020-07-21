import styled from 'styled-components';

export const HamburgerButton = styled.div`
  button {
    position: fixed;
    display: block;
    z-index: 1000;
    right: 30px;
    top: 35px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 1399px) {
      display: none;
    }
  }
`;
