import React from "react";
import { Box, BoxProps } from "@mui/material";

export const Container = ({ children, ...props }: BoxProps) => {
  return (
    <Box px={[2, 10, 15, 30]} {...props} width={1}>
      {children}
    </Box>
  );
};
