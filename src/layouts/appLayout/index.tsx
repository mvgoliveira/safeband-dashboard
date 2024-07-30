import { ReactElement } from "react";

import { Container } from "./styles";

export const AppLayout = (): ReactElement => {
    return <Container></Container>;
};

const Header = (): ReactElement => {
    return <></>;
};
Header.displayName = "Header";
AppLayout.Header = Header;

const SideBar = (): ReactElement => {
    return <></>;
};
SideBar.displayName = "SideBar";
AppLayout.SideBar = SideBar;

const Content = (): ReactElement => {
    return <></>;
};
Content.displayName = "Content";
AppLayout.Content = Content;
