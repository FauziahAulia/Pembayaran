import * as React from "react";
//import material
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
// import icon
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import navbar
import Navbar from "../component/Navbar";
// Import React router
import { Link } from "react-router-dom";

export default function Atm() {
  return (
    <div>
      <Container sx={{ width: 438 }}>
        <Link to="/topup">
          <Navbar>Top Up - ATM</Navbar>
        </Link>
        <Accordion sx={{ mt: 7 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ mt: 9 }}
          >
            <Typography style={{ fontWeight: "bold" }}>Pilih Bank</Typography>
          </AccordionSummary>
          <Divider
            variant="fullWidth"
            sx={{ width: 381, ml: 0, mt: -2, mb: 2 }}
          />
          <AccordionDetails>
            {/* 1.) List bank */}
            <nav aria-label="main mailbox folders">
              <List sx={{ mt: -4 }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="BCA" />
                  </ListItemButton>
                </ListItem>
                <Divider variant="fullWidth" sx={{ width: 381, ml: -2 }} />
                <ListItem disablePadding sx={{ mb: -3 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mandiri" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
