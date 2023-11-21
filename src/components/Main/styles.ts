import { styled } from "@mui/material";
import { FLEX_COLUMN_ALIGN_CENTER, FLEX_ROW } from "ui-kit";

export const Wrapper = styled("div")`
  ${FLEX_COLUMN_ALIGN_CENTER};
  gap: ${({ theme }) => theme.spacing(25)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: ${({ theme }) => theme.spacing(20)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(15)};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: ${({ theme }) => theme.spacing(10)};
  }
`;

export const ContentWrapper = styled("div")`
  ${FLEX_ROW};
  gap: ${({ theme }) => theme.spacing(8)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    ${FLEX_COLUMN_ALIGN_CENTER};
  }
`;
