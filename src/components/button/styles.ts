import styled, { css } from "styled-components";

import { IVariantProps } from "./constants";

export const StyledButton = styled.button<{ variant: IVariantProps }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;

    ${({ theme, variant }) => css`
        border: 1px solid ${theme.colors[variant.borderColor]};
        background: ${theme.colors[variant.background]};
        color: ${theme.colors[variant.color]};
        transition: 50ms cubic-bezier(0.215, 0.61, 0.355, 1);

        &:hover {
            background: ${theme.colors[variant.hover_background]};
        }
    `}
`;
