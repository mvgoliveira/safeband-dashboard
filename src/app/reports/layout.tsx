import type { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
    title: "SafeBand - Relatórios",
    description: "Health and Security Dashboard for SafeBand's devices",
};

export default function ReportsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): ReactElement {
    return <>{children}</>;
}
