import { HEADER_HEIGHT } from "@constants";
import { AppBar, styled } from "@mui/material";

export const Wrapper = styled(AppBar)`
  position: sticky;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: unset;
  height: ${HEADER_HEIGHT}px;
  margin-bottom: ${({ theme }) => theme.spacing(24)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-bottom: ${({ theme }) => theme.spacing(18)};
    margin-top: ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: ${({ theme }) => theme.spacing(12)};
    margin-top: ${({ theme }) => theme.spacing(4)};
  }

  .MuiToolbar-root {
    padding: 0;
    min-height: ${HEADER_HEIGHT}px;
  }
`;
