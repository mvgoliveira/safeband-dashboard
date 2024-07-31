import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReactElement } from "react";

import { AppLayout } from "../layouts/appLayout";
import StyledComponentsRegistry from "../lib/registry";
import ClientThemeWrapper from "./client-theme-wrapper";

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SafeBand",
    description: "Health and Security Dashboard for SafeBand's devices",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): ReactElement {
    return (
        <html lang="pt-br">
            <body className={roboto.className}>
                <StyledComponentsRegistry>
                    <ClientThemeWrapper>
                        <AppLayout>{children}</AppLayout>
                    </ClientThemeWrapper>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
