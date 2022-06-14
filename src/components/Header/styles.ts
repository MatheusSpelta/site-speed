import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.nav` 
    max-width: 1120px;
    margin-bottom: -2rem;
    margin-top: -1.5rem;
    background: transparent;
    position: sticky;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
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
        size: 4rem;
        height: 6rem;
    
        &:hover {
            transition: 200ms;
            opacity: 0.8;
        }
    }
`;