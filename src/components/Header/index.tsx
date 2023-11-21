import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as Logo } from "assets/dananz_logo.svg";

import { Wrapper } from "./styles";
import { Button, Container } from "ui-kit";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { DRAWER_WIDTH, NAV_ITEMS } from "@constants";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box my={2}>
        <Logo />
      </Box>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button variant="contained">Contact Us</Button>
    </Box>
  );

  return (
    <Wrapper>
      <Container>
        <Toolbar
          sx={{
            justifyContent: { xs: "start", md: "space-between" },
          }}
        >
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: { md: 12, lg: 18 },
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                href={item}
                sx={{ textDecoration: "none" }}
                key={item}
                color="text.primary"
              >
                {item}
              </Link>
            ))}
            <Button variant="contained">Contact Us</Button>
          </Box>
        </Toolbar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Container>
    </Wrapper>
  );
};
