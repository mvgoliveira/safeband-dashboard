import type { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
    title: "SafeBand - Dashboard",
    description: "Health and Security Dashboard for SafeBand's devices",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): ReactElement {
    return <>{children}</>;
}
