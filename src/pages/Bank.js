import React from "react";
//import material
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
  Grid,
  Box,
  Button,
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
import Navbar from "../component/Navbar";
// Import React router
import { Link } from "react-router-dom";

export default function Bank() {
  return (
    <div>
      <Container>
        <Link to="/transfer">
          <Navbar>Ke Rekening Bank</Navbar>
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
            sx={{ width: 383, ml: 0, mt: -2, mb: 2 }}
          />
          <AccordionDetails>
            {/* 1.) List bank */}
            <nav aria-label="main mailbox folders">
              <List sx={{ mt: -4 }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon sx={{ color: "#249EA0" }} />
                    </ListItemIcon>
                    <ListItemText primary="BCA" />
                  </ListItemButton>
                </ListItem>
                <Divider variant="fullWidth" sx={{ width: 383, ml: -2 }} />
                <ListItem disablePadding sx={{ mb: -3 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon sx={{ color: "#249EA0" }} />
                    </ListItemIcon>
                    <ListItemText primary="Mandiri" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </AccordionDetails>
        </Accordion>

        {/* 2.) Rekening */}
        <TextField
          type="password"
          placeholder="No Rekening"
          sx={{ width: 390, mt: 2 }}
        />

        {/* 3.) Saldo */}
        <Grid
          item
          xs={12}
          sx={{ mt: 2, border: 1 }}
          style={{
            //border radius
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            overflow: "hidden",
          }}
        >
          <Typography sx={{ ml: 2, mt: 1 }} style={{ fontWeight: "bold" }}>
            Saldo
          </Typography>
          <Typography
            sx={{ ml: 3, mt: 0 }}
            style={{ fontSize: 21, fontWeight: "bold" }}
          >
            Rp 8.345.000
          </Typography>
        </Grid>

        {/* 4.) Nominal Transfer */}
        <Grid
          item
          xs={12}
          sx={{ mt: 2, border: 1 }}
          style={{
            //border radius
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            overflow: "hidden",
          }}
        >
          <Typography sx={{ ml: 2, mt: 1 }} style={{ fontWeight: "bold" }}>
            Nominal Transfer
          </Typography>
          <Typography
            sx={{ ml: 2, mt: 0, mb: 1 }}
            style={{ fontSize: 21, fontWeight: "bold" }}
          >
            Rp
            <Box
              sx={{
                mt: -4,
                ml: 4,
                width: 320,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth size="small" />
            </Box>
          </Typography>
        </Grid>

        {/* 5.) Pesan  */}
        <TextField
          placeholder="Pesan (Opsional) "
          multiline
          rows={4}
          sx={{ width: 390, mt: 2 }}
        />

        {/* Button Lanjutkan */}
        <Box sx={{ mt: 8 }}>
          <Button
            variant="contained"
            color="warning"
            sx={{ width: 390, mt: 2 }}
          >
            Lanjutkan
          </Button>
        </Box>
      </Container>
    </div>
  );
}
