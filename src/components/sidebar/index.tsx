import { Typography } from "@/components/typography";
import { IReactChildren } from "@/interfaces/core";
import Image from "next/image";
import { ReactElement } from "react";

import {
    ImageContainer,
    StyledDivider,
    StyledItem,
    StyledSidebar,
    StyledUserProfile,
} from "./styles";

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

interface IUserProfileProps {
    imageUrl: string;
    username: string;
}

const UserProfile = ({ imageUrl, username }: IUserProfileProps): ReactElement => {
    return (
        <StyledUserProfile>
            <ImageContainer>
                <Image src={imageUrl} width={32} height={32} alt={"Profile Image"} />
            </ImageContainer>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                    tag="p"
                    color="black"
                    fontFamily="roboto"
                    fontSize={{ xs: "fs75" }}
                    fontWeight="bold"
                >
                    {username}
                </Typography>

                <Typography
                    tag="p"
                    color="gray70"
                    fontFamily="roboto"
                    fontSize={{ xs: "fs50" }}
                    fontWeight="regular"
                >
                    Editar perfil
                </Typography>
            </div>
        </StyledUserProfile>
    );
};
UserProfile.displayName = "UserProfile";
SideBar.UserProfile = UserProfile;
