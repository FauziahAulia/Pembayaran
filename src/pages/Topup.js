import React from "react";
//import material
import {
  Container,
  Typography,
  Card,
  Divider,
  Box,
  Button,
} from "@mui/material";
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
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import AtmRoundedIcon from "@mui/icons-material/AtmRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Topup() {
  return (
    <div>
      <Container sx={{ minWidth: 405 }}>
        <Link to="/">
          <Navbar>Top Up</Navbar>
        </Link>
        <Box sx={{ mt: 7 }}>
          <Typography
            align="center"
            sx={{ textAlign: "left", fontSize: 19, fontWeight: "bold" }}
          >
            Saldo DOMPETKU Cash:
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "right", mt: -4 }}
            style={{ fontWeight: "bold" }}
          >
            Rp 8.345.000
          </Typography>
          <ListItemText
            sx={{ mt: 1, fontSize: 15 }}
            align="center"
            secondary="Maks. Saldo DOMPETKU Cash RP.10.000.000 (Premier)"
          />
          <Divider
            variant="fullWidth"
            sx={{ minWidth: 444, ml: -3, border: 1, color: "#249EA0" }}
          />
        </Box>
        <Typography sx={{ mt: 2, mb: -6, fontSize: 18, fontWeight: "bold" }}>
          Pilih Metode
        </Typography>

        {/* Card 1 */}
        <Link to="/debit" style={{ textDecoration: "none" }}>
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
                <CreditCardRoundedIcon
                  sx={{ fontSize: 28, color: "#249EA0" }}
                />
                <Typography
                  sx={{ ml: 5, mt: -4, fontSize: 18, fontWeight: "bold" }}
                >
                  Kartu Debit
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                <ArrowForwardIosIcon sx={{ textAlign: "right" }} />
              </ListItemText>
            </ListItem>
          </Card>
        </Link>

        {/* Card 2 */}
        <Link to="/atm" style={{ textDecoration: "none" }}>
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
                <AtmRoundedIcon sx={{ fontSize: 28, color: "#249EA0" }} />
                <Typography
                  sx={{ ml: 5, mt: -4, fontSize: 18, fontWeight: "bold" }}
                >
                  ATM
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                <ArrowForwardIosIcon sx={{ textAlign: "right" }} />
              </ListItemText>
            </ListItem>
          </Card>
        </Link>

        {/* Card 3 */}
        <Link to="/mbanking" style={{ textDecoration: "none" }}>
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
                <PhoneAndroidRoundedIcon
                  sx={{ fontSize: 28, color: "#249EA0" }}
                />
                <Typography
                  sx={{ ml: 5, mt: -4, fontSize: 18, fontWeight: "bold" }}
                >
                  Internet / Mobile Banking
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                <ArrowForwardIosIcon sx={{ textAlign: "right" }} />
              </ListItemText>
            </ListItem>
          </Card>
        </Link>

        {/* Button Lanjutkan */}
        <Box sx={{ mt: 24 }}>
          <Button
            variant="contained"
            color="warning"
            sx={{ minWidth: 406, mt: 15 }}
          >
            Lanjutkan
          </Button>
        </Box>
      </Container>
    </div>
  );
}
