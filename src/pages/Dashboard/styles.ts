import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundDashboard.jpg';


export const Container = styled.main`
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    position: relative;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20.5rem 20rem;
    opacity: 0.9;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-image: 
          linear-gradient(
           to bottom,
           rgba(0,0,0,0),
           rgba(0,0,0,0.5)
          );
        opacity: 0.2;
    }

`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    position: absolute;
    width: 34rem;
    top: 6rem;
    left: 6rem;

text {
    color: var(--shape);
    text-align: left;
}

    button {
        background: transparent;
        opacity: 0.9;
        color:var(--shape);
        border: 0.1rem solid;
        border-radius: 3rem;
        border-color: var(--shape);
        margin-top: 2rem;
        width: 7rem;
        z-index: 1;
        font-size: 1rem;

        &:hover {
            transition: 200ms;
            opacity: 0.6;
            color: '#fff1';
            background-color: var(--shape);
        }
    }



`;
export const Title = styled.text`
    font-size: 3.5rem;
    text-align: left;
    margin-bottom: 2rem;
`;