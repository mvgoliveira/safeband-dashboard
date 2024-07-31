"use client";

import { ReactElement } from "react";

import { IReactChildren } from "../../interfaces/core";
import {
    LayoutContainer,
    StyledContent,
    StyledHeader,
    StyledIconHeaderContainer,
    StyledSideBar,
} from "./styles";

export const AppLayout = ({ children }: IReactChildren): ReactElement => {
    return (
        <LayoutContainer>
            <StyledHeader />

            <StyledIconHeaderContainer />

            <StyledSideBar></StyledSideBar>

            <StyledContent>{children}</StyledContent>
        </LayoutContainer>
    );
};
