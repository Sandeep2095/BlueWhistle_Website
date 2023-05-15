import React from "react";
import "./AdminTopNav.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AdminTopNav = ({ open, handleDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElFab, setAnchorElFab] = React.useState(null);
  const openFab = Boolean(anchorElFab);
  const handleClickFab = (event) => {
    setAnchorElFab(event.currentTarget);
  };
  const handleCloseFab = () => {
    setAnchorElFab(null);
  };

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar
          style={{
            justifyContent: "space-between",
            backgroundColor: "#0e3252",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Avatar
              alt="Remy Sharp"
              src="../../../../media/4.jpg"
              style={{ marginRight: "15px" }}
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" noWrap component="div">
              Home
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Button
                id="demo-positioned-button"
                aria-controls={openFab ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openFab ? "true" : undefined}
                onClick={handleClickFab}
              >
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab size="small" color="secondary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </Box>
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorElFab}
                open={openFab}
                onClose={handleCloseFab}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleCloseFab}>Task</MenuItem>
                <MenuItem onClick={handleCloseFab}>Project</MenuItem>
                <MenuItem onClick={handleCloseFab}>Team</MenuItem>
              </Menu>
            </div>
            <div>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="../../../../media/4.jpg"
                  style={{ marginRight: "15px" }}
                  sx={{ width: 30, height: 30 }}
                />
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AdminTopNav;
