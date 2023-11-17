import React from "react";
import { ButtonProps } from "@mui/material";

import { Wrapper } from "./styles";

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <Wrapper {...rest}>{children}</Wrapper>;
};
