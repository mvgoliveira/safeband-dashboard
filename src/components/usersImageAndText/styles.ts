import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 10px;
    cursor: pointer;
`;

export const ImagesContainer = styled.div`
    display: flex;
    margin-left: 10px;
`;

export const ImageContainer = styled.div`
    position: relative;
    border-radius: 100%;
    overflow: hidden;
    height: 38px;
    width: 38px;
    margin-left: -10px;
    border: 3px solid ${({ theme }) => theme.colors.white};
`;
