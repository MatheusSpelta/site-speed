import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundImage-Dashboard.jpg';


export const Container = styled.main`
    width: 100%;
    height: 100%;
`;
export const Content = styled.div`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 17rem 20rem;
    opacity: 0.9;
`;