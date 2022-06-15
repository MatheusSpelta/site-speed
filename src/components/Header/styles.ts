import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.nav` 
    width: 100%;
    height: 6rem;
    margin-top: -1.1rem;
    background: var(--background);
    background-image: 
          linear-gradient(
           to bottom,
           rgba(0,0,0,0),
           rgba(0,0,0,0.2),
          );
        opacity: 1;
    display: flex;
    position: sticky;
    top: 0;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
    z-index: 12;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: var(--blue);
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 3rem;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
        padding: 0rem 12rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
/* 
    button {
        font-size: 2rem 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 5rem;
        height: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }  */
`;

export const NavLink = styled(Link)`
    color: var(--blue);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    @media screen and (max-width: 768px) {
            display: none;
        }

    @keyframes moveToRight {
        0% {    

        }        
    }
    &:hover {
        filter: brightness(0.6);
        transition: 800ms;
    }
    &.active {
        filter: brightness(0.2);
        border-bottom: 2px solid;   
    }
`;

export const ImgLink = styled(Link)`
    margin: 2rem 5rem;
    position: relative;
    
    img {
        size: 3rem;
        height: 5rem;
    
        &:hover {
            transition: 200ms;
            opacity: 0.8;
        }
    }
`;