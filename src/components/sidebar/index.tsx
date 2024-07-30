import { ReactElement } from "react";

export const SideBar = (): ReactElement => {
    return <></>;
};

const Item = (): ReactElement => {
    return <></>;
};
Item.displayName = "Item";
SideBar.Item = Item;

const Divider = (): ReactElement => {
    return <></>;
};
Divider.displayName = "Divider";
SideBar.Divider = Divider;

const UserProfile = (): ReactElement => {
    return <></>;
};
UserProfile.displayName = "UserProfile";
SideBar.UserProfile = UserProfile;
