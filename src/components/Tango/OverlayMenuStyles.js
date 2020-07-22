import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  transform: ${props =>
    props.menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  z-index: 9999;
  background: #f3f3f3;
  left: 0px;
  padding: 0px;
  transition: all 0.3s ease;
  

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f3f3f3;
    width: 100%;
    height: 100%;
    color: #274549;
    padding: 40px;
    margin-top: 280px;

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 20px 0 0 0;

      li {
        margin: 20px 0 0 0;
      }

      li.overlayActive {
        color: #a5c0ad;
      }

      a {
        font-family: 'Proza Libre', Arial, Helvetica, sans-serif;
        font-size: 1.1rem;
        color: #274549;        
        transition: all 0.3s ease;
        text-decoration: none;

        :hover {
          color: #a5c0ad;
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    margin-top: -280px;
    right: 60px;
    color: #274549;    
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 1s ease;
    color: #274549; 

    :hover {
      transform: rotate(180deg);      
    }
  }
`;
