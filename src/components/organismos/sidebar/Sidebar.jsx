import styled from "styled-components";
import { v } from "../../../styles/variables";
import { LinksArray, SecondarylinksArray } from "../../../utils/dataEstatica";
import { NavLink } from "react-router-dom";
import { SidebarCard } from "./SidebarCard";


export function Sidebar({state, setState}) {
  return (
    <Main isOpen={state }>

      <span className="SiderButton" onClick={() => setState(!state)}>
        {<v.iconoflechaderecha />}
      </span>

      <Container isOpen={state} className={state ? 'active' : ''}>
          <div className="logoContent">
            <div className="imgContent">
              <img src={v.logo} alt="" />
            </div>
              <h2>Consenso</h2>
          </div>
          <nav>
            {
              LinksArray.map((link) => (
                <div className={state ? "LinkContainer active" : "LinkContainer"} key={link.label}>
                  <NavLink to={link.to} className={({isActive}) => `Links ${isActive ? ` active` : ``}`}>
                    <div className="LinkIcon">{link.icon}</div>
                    {state && <span>{link.label}</span>}
                  </NavLink>
                </div>
              ))
            }
          </nav>
          <Divider />

          {
              SecondarylinksArray.map((link) => (
              <div className={state ? "LinkContainer active" : "LinkContainer"} key={link.label}>
                <NavLink to={link.to} className={({isActive}) => `Links ${isActive ? ` active` : ``}`}>
                  <div className="LinkIcon">{link.icon}</div>
                  {state && <span>{link.label}</span>}
                </NavLink>
              </div>
            ))
          }
          <Divider />

          {
            state && <SidebarCard />
          }

      </Container>

    </Main>
  );

}
const Container =styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.3s ease-in-out;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
  }

  &.active {
    width: 220px;
  }

  .logoContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;

    .imgContent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      transform: ${({isOpen}) => (isOpen ? `scale(0.7)` : `scale(1.5)`)} rotate(${({theme}) => theme.logorotate});

      img {
        width: 100%;
        animation: flotar 1.5s infinite alternate ease-in-out;
      }
    }

    h2 {
      display: ${({isOpen}) => (isOpen ? `block` : `none`)};
    }

    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }

  .LinkContainer {
    margin: 5px 0;
    transition: all 0.3s;
    padding: 0 5%;
    position: relative;
    &:hover {
      :hover {
        background: ${(props) => props.theme.bgAlpha};
      }
    }

    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${() => v.smSpacing} -2px) 0;
      color: ${(props) => props.theme.text};
      height: 60px;

      .LinkIcon {
        padding: ${() => v.smSpacing} ${() => v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }

      &.active {
        color: ${(props) => props.theme.bg5};

        &::before{
          content: "";
          position: absolute;
          height: 100%;
          width: 4px;
          background: ${(props) => props.theme.bg5};
          border-radius: 10px;
          left: 0;
        }
      }


    } 
  }
`

const Main = styled.div`
  .SiderButton {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    z-index: 2;
    transform: ${({isOpen}) => isOpen ? `translateX(162px) rotate(3.142rad)` : `initial`};
  }
`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: 15px 0;
`