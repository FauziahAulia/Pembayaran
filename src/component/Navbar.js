import React from "react";
import { Box, Typography, IconButton, AppBar } from "@mui/material";
// import icon
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Navbar() {
  return (
    <div>
      <AppBar
        elevation="none"
        position="fixed"
        sx={{ xs: 3, bgcolor: "#249EA0", width: "100%" }}
      >
        <Box sx={{ flexGrow: 1, width: "100%", ml: 1 }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackIosNewIcon style={{ fontSize: 20 }} />
            <Typography
              className="typography"
              sx={{ ml: 1 }}
              style={{ fontSize: 20 }}
            >
              <b>Pembayaran</b>
            </Typography>
          </IconButton>
        </Box>
      </AppBar>
    </div>
  );
}
