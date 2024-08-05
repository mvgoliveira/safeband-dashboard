import type { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
    title: "SafeBand - Ajuda",
    description: "Health and Security Dashboard for SafeBand's devices",
};

export default function HelpLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): ReactElement {
    return <>{children}</>;
}
