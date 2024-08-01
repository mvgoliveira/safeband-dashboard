import Link from "next/link";
import styled from "styled-components";

export const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const StyledItem = styled(Link)<{ active: boolean }>`
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 8px;
    background: ${({ theme, active }) => (active ? theme.colors.gray10 : theme.colors.white)};

    p {
        color: ${({ theme, active }) => (active ? theme.colors.black : theme.colors.gray70)};
    }

    &:hover {
        background: ${({ theme }) => theme.colors.gray10};
    }
`;

export const StyledDivider = styled.hr`
    border: none;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray30};
    margin: 10px 0;
`;

export const StyledUserProfile = styled.div`
    display: flex;
    gap: 10px;
    padding: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray30};
`;

export const ImageContainer = styled.div`
    overflow: hidden;
    border-radius: 4px;
`;
