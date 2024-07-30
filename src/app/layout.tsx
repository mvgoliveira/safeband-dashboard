import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactElement } from "react";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={inter.className}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
