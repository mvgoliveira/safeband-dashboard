import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: calc(100% - 400px);
    padding: 20px;

    justify-content: center;
`;

export const HeroContent = styled.div``;

export const HeroImageContainer = styled.div`
    position: relative;
    width: 500px;
    height: 100%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
`;
