import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  transform: ${props =>
    props.menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  z-index: 9999;
  background: #607D8B;
  left: 0px;
  padding: 20px;
  transition: all 0.3s ease;
  margin-top: 180px;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #607D8B;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 40px;

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 120px 0 0 0;

      li {
        margin: 20px 0 20px 0;
      }

      li.overlayActive {
        color: #d22e26;
      }

      a {
        font-family: 'Proza Libre', Arial, Helvetica, sans-serif;
        font-size: 1.1rem;
        color: #fff;
        transition: all 0.3s ease;
        text-decoration: none;

        :hover {
          color: #d22e26;
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    top: 280px;
    right: 60px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 1s ease;

    :hover {
      transform: rotate(180deg);
    }
  }
`;
