import { Theme } from "@/themes";

export type DrawPanelVariant = "primary" | "secondary";

export interface IVariantProps {
    borderColor: keyof typeof Theme.colors;
    background: keyof typeof Theme.colors;
    hover_background: keyof typeof Theme.colors;
    color: keyof typeof Theme.colors;
}

type IVariants<T extends string> = {
    [K in T]: IVariantProps;
};

export const VARIANT_APPEARANCE: IVariants<DrawPanelVariant> = {
    primary: {
        borderColor: "transparent",
        background: "blue40",
        hover_background: "blue50",
        color: "white",
    },
    secondary: {
        borderColor: "transparent",
        background: "transparent",
        hover_background: "gray10",
        color: "black",
    },
};
