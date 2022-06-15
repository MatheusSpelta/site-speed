import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    opacity: 0.9;

    h1 {
        color: var(--shape);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-beetween;
    padding: 1rem;

    `;

export const ImgContent = styled.div`
    width: 100%;
    height: 100%;

    img {
        size: 8rem;
        height: 6rem;
        margin: 0.5rem 1rem;
        border-radius: 1rem;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
    }
`;