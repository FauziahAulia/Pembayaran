import React from "react";
//import material
import { Container, Typography, Card } from "@mui/material";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import list
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import navbar
import Navbar from "../component/Navbar";
// Import React router
import { Link } from "react-router-dom";
// import icon
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import data
import TransaksiData from "../component/TransaksiData";

export default function Transfer() {
  return (
    <div>
      <Container sx={{ minWidth: 405 }}>
        <Link to="/">
          <Navbar>Transfer</Navbar>
        </Link>
        {/* Card 1 */}
        <Card
          sx={{ minWidth: 380, height: 50, mt: 8 }}
          style={{
            //border radius style
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            overflow: "hidden",
          }}
        >
          <ListItem>
            <ListItemText>
              <MobileScreenShareIcon sx={{ fontSize: 28, color: "#249EA0" }} />
              <Typography
                sx={{ ml: 5, mt: -4, fontSize: 18, fontWeight: "bold" }}
              >
                Ke Sesama
              </Typography>
            </ListItemText>
            <ListItemText sx={{ textAlign: "right" }}>
              <ArrowForwardIosIcon sx={{ textAlign: "right" }} />
            </ListItemText>
          </ListItem>
        </Card>

        {/* Card 2 */}
        <Link to="/bank" style={{ textDecoration: "none" }}>
          <Card
            sx={{ minWidth: 380, height: 50, mt: 2 }}
            style={{
              //border radius style
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              overflow: "hidden",
            }}
          >
            <ListItem>
              <ListItemText>
                <AccountBalanceIcon sx={{ fontSize: 28, color: "#249EA0" }} />
                <Typography
                  sx={{ ml: 5, mt: -4, fontSize: 18, fontWeight: "bold" }}
                >
                  Ke Rekening Bank
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                <ArrowForwardIosIcon sx={{ textAlign: "right" }} />
              </ListItemText>
            </ListItem>
          </Card>
        </Link>
        <Typography sx={{ mt: 3, fontSize: 18, fontWeight: "bold" }}>
          Transaksi Terakhir
        </Typography>
        <TransaksiData />
      </Container>
    </div>
  );
}
