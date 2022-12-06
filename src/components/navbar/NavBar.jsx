import "./NavBar.css";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <AppBar position="static" style={{ background: "black" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="orange"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <StorefrontIcon className="nav__icon" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              eShop
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/">
                <HomeIcon className="nav__icon" />
              </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={0}>
                <Link to="/cart">
                  <ShoppingBasketIcon className="nav__icon" />
                </Link>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
