import { Button, buttonClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Button)`
  &.${buttonClasses.root} {
    text-transform: unset;
    padding: ${({ theme }) => theme.spacing(3.5, 8)};
    line-height: 1.5;
    font-size: 14px;
  }
`;
