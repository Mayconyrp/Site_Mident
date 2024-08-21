import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../assets/logo_mident.png";

const drawerWidth = 240;
const navItems = ["Sobre nós", "Portfólio", "Contato"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#1A1A1A" }}
    >
      <Box sx={{ p: 2 }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: 50, // Ajuste a altura conforme necessário
            width: "auto",
          }}
        />
      </Box>
      <Divider sx={{ backgroundColor: "#CCCCCC" }} />{" "}
      {/* Alterar cor do Divider */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "#CCCCCC", // Cor do texto
                "&:hover": {
                  backgroundColor: "#555555", // Cor de fundo ao passar o mouse
                  color: "#C4837A", // Cor ao passar o mouse
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#1A1A1A" }} // Cor da Navbar
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "none" },
            }}
          >
            <img
              src={logo}
              alt="Logo Mobile"
              style={{
                height: 40, // Ajuste a altura conforme necessário
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end" // Mudado para o final
            onClick={handleDrawerToggle}
            sx={{
              ml: 2,
              display: { xs: "block", sm: "none" },
              "&:hover": {
                color: "#C4837A", // Cor ao passar o mouse
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              height: 40, // Ajuste a altura conforme necessário
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#CCCCCC",
                  "&:hover": {
                    color: "#C4837A", // Cor ao passar o mouse
                    backgroundColor: "#555555", // Cor de fundo ao passar o mouse
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right" // Mudado para o lado direito
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Melhor desempenho em dispositivos móveis
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1A1A1A", // Cor de fundo do menu
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
