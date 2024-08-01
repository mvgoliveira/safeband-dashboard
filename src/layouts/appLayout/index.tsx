"use client";

import { SideBar } from "@/components/sidebar";
import { Theme } from "@/themes";
import { usePathname } from "next/navigation";
import { ReactElement, useEffect } from "react";
import {
    MdOutlineDashboard,
    MdOutlineDescription,
    MdOutlineGroup,
    MdOutlineHelpOutline,
    MdOutlineHome,
    MdOutlineSettings,
} from "react-icons/md";

import { IReactChildren } from "../../interfaces/core";
import {
    LayoutContainer,
    StyledContent,
    StyledHeader,
    StyledIconHeaderContainer,
    StyledSideBar,
} from "./styles";

export const AppLayout = ({ children }: IReactChildren): ReactElement => {
    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);

    return (
        <LayoutContainer>
            <StyledHeader />

            <StyledIconHeaderContainer />

            <StyledSideBar>
                <SideBar>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 5,
                            height: "100%",
                            padding: 15,
                        }}
                    >
                        <SideBar.Item
                            icon={
                                <MdOutlineHome
                                    size={16}
                                    color={
                                        pathname === "/" ? Theme.colors.blue50 : Theme.colors.gray60
                                    }
                                />
                            }
                            text="Início"
                            href="/"
                            active={pathname === "/"}
                        />
                        <SideBar.Item
                            icon={
                                <MdOutlineDashboard
                                    size={15}
                                    color={
                                        pathname === "/dashboard"
                                            ? Theme.colors.blue50
                                            : Theme.colors.gray60
                                    }
                                />
                            }
                            text="Dashboard"
                            href="/dashboard"
                            active={pathname === "/dashboard"}
                        />
                        <SideBar.Item
                            icon={
                                <MdOutlineGroup
                                    size={16}
                                    color={
                                        pathname === "/monitored"
                                            ? Theme.colors.blue50
                                            : Theme.colors.gray60
                                    }
                                />
                            }
                            text="Monitorados"
                            href="/monitored"
                            active={pathname === "/monitored"}
                        />
                        <SideBar.Item
                            icon={
                                <MdOutlineDescription
                                    size={15}
                                    color={
                                        pathname === "/reports"
                                            ? Theme.colors.blue50
                                            : Theme.colors.gray60
                                    }
                                />
                            }
                            text="Relatórios"
                            href="/reports"
                            active={pathname === "/reports"}
                        />

                        <SideBar.Divider />

                        <SideBar.Item
                            icon={
                                <MdOutlineSettings
                                    size={15}
                                    color={
                                        pathname === "/settings"
                                            ? Theme.colors.blue50
                                            : Theme.colors.gray60
                                    }
                                />
                            }
                            text="Configurações"
                            href="/settings"
                            active={pathname === "/settings"}
                        />
                        <SideBar.Item
                            icon={
                                <MdOutlineHelpOutline
                                    size={15}
                                    color={
                                        pathname === "/help"
                                            ? Theme.colors.blue50
                                            : Theme.colors.gray60
                                    }
                                />
                            }
                            text="Ajuda"
                            href="/help"
                            active={pathname === "/help"}
                        />
                    </div>

                    <SideBar.UserProfile
                        imageUrl="https://avatars.githubusercontent.com/u/53785487?v=4"
                        username="Marcus Oliveira"
                    />
                </SideBar>
            </StyledSideBar>

            <StyledContent>{children}</StyledContent>
        </LayoutContainer>
    );
};
