import { IReactChildren } from "@/interfaces/core";
import { ReactElement } from "react";

import { VARIANT_APPEARANCE } from "./constants";
import { StyledButton } from "./styles";

interface IButtonProps extends IReactChildren {
    variant?: keyof typeof VARIANT_APPEARANCE;
}

export const Button = ({ variant = "primary", children }: IButtonProps): ReactElement => {
    return <StyledButton variant={VARIANT_APPEARANCE[variant]}>{children}</StyledButton>;
};
