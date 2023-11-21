import { styled } from "@mui/material";
import { FLEX_ROW_ALIGN_CENTER } from "ui-kit";

export const Wrapper = styled("div")`
  position: relative;

  .arrow-right {
    position: absolute;
    right: 0;
  }
`;

export const SocialMediasWrapper = styled("div")`
  ${FLEX_ROW_ALIGN_CENTER};
  gap: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(4)};

  svg {
    padding: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.palette.text.disabled};
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`;
