import React from "react";
//import material
import {
  Container,
  Card,
  CardActions,
  CardContent,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// for button
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
//import icon
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import HistoryIcon from "@mui/icons-material/History";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
// import navbar
import Navbar from "../component/Navbar";
// import list
import ListData from "../component/ListData";
// Import React router
import { Link } from "react-router-dom";

export default function BasicCard() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Container sx={{ minWidth: 405 }}>
        <Navbar>Pembayaran</Navbar>
        <Card sx={{ minWidth: 400, mt: 8, border: 0 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color="text.secondary">
              Dompet Saya
            </Typography>
            <Typography
              variant="h4"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Rp 8.345.000
            </Typography>
            <ListItem sx={{ mt: -1 }}>
              <ListItemAvatar sx={{ ml: -2 }}>
                <MonetizationOnTwoToneIcon color="warning" />
              </ListItemAvatar>
              <ListItemText sx={{ ml: -3, mb: 1 }}>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  Point 9841
                </Typography>
              </ListItemText>
            </ListItem>
          </CardContent>
          <CardActions>
            <Box sx={{ width: 360, height: 80, m: "auto", mt: -4, p: "auto" }}>
              <Card
                sx={{ border: 1, height: 80, color: "#249EA0" }}
                style={{
                  //border radius
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  overflow: "hidden",
                }}
              >
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{ pr: 2, mt: 1 }}
                >
                  <BottomNavigationAction
                    icon={
                      <Link to="/topup" style={{ textDecoration: " none" }}>
                        <ControlPointIcon
                          sx={{ fontSize: 32, color: "#249EA0" }}
                        />
                        <Typography sx={{ fontSize: 12, color: "#249EA0" }}>
                          Top Up
                        </Typography>
                      </Link>
                    }
                  />
                  <BottomNavigationAction
                    icon={
                      <Link to="/transfer" style={{ textDecoration: " none" }}>
                        <DriveFolderUploadIcon
                          sx={{ fontSize: 32, color: "#249EA0" }}
                        />
                        <Typography sx={{ fontSize: 12, color: "#249EA0" }}>
                          Transfer
                        </Typography>
                      </Link>
                    }
                  />
                  <BottomNavigationAction
                    icon={
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <BrowserUpdatedIcon
                          sx={{ fontSize: 32, color: "#249EA0" }}
                        />
                        <Typography sx={{ fontSize: 12, color: "#249EA0" }}>
                          Tarik Tunai
                        </Typography>
                      </Link>
                    }
                  />

                  <BottomNavigationAction
                    icon={
                      <Link to="/riwayat" style={{ textDecoration: " none" }}>
                        <HistoryIcon sx={{ fontSize: 32, color: "#249EA0" }} />
                        <Typography sx={{ fontSize: 12, color: "#249EA0" }}>
                          Riwayat
                        </Typography>
                      </Link>
                    }
                  />
                </BottomNavigation>
              </Card>
            </Box>
          </CardActions>
        </Card>
        <ListData />
      </Container>
    </div>
  );
}
