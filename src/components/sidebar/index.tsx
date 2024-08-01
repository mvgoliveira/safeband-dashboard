import { Typography } from "@/components/typography";
import { IReactChildren } from "@/interfaces/core";
import { ReactElement } from "react";

import { StyledDivider, StyledItem, StyledSidebar, StyledUserProfile } from "./styles";

export const SideBar = ({ children }: IReactChildren): ReactElement => {
    return <StyledSidebar> {children} </StyledSidebar>;
};

interface IItemProps {
    icon: ReactElement;
    text: string;
    href: string;
    active?: boolean;
}

const Item = ({ icon, text, href, active = false }: IItemProps): ReactElement => {
    return (
        <StyledItem href={href} active={active}>
            {icon}

            <Typography
                tag="p"
                color={active ? "black" : "gray70"}
                fontFamily="roboto"
                fontSize={{ xs: "fs75" }}
                fontWeight="regular"
            >
                {text}
            </Typography>
        </StyledItem>
    );
};
Item.displayName = "Item";
SideBar.Item = Item;

const Divider = (): ReactElement => {
    return <StyledDivider />;
};
Divider.displayName = "Divider";
SideBar.Divider = Divider;

const UserProfile = (): ReactElement => {
    return <StyledUserProfile></StyledUserProfile>;
};
UserProfile.displayName = "UserProfile";
SideBar.UserProfile = UserProfile;
