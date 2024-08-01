import styled from "styled-components";

export const LayoutContainer = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 50px auto;
    background: ${({ theme }) => theme.colors.white};
`;

export const StyledIconHeaderContainer = styled.header`
    position: fixed;
    z-index: 950;
    width: 250px;
    height: 50px;
    border-right: 1px solid ${({ theme }) => theme.colors.gray30};
`;

export const StyledHeader = styled.header`
    position: fixed;
    z-index: 950;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray30};
`;

export const StyledSideBar = styled.aside`
    position: fixed;
    top: 50px;
    box-sizing: border-box;
    height: calc(100vh - 50px);
    width: 250px;
    z-index: 960;
    border-right: 1px solid ${({ theme }) => theme.colors.gray30};
`;

export const StyledContent = styled.article``;
