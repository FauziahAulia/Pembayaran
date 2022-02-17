import React from "react";
//import material
import {
  Container,
  Card,
  CardActions,
  CardContent,
  Typography,
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

export default function BasicCard() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Container>
        <Card variant="fullWidth" sx={{ minWidth: 320, mt: 5 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color="text.secondary">
              Dompet Saya
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Rp 8.345.000
            </Typography>
            <Typography
              sx={{ mt: 1, mb: 1.5, fontSize: 18 }}
              color="text.secondary"
            >
              Point 9841
            </Typography>
          </CardContent>
          <CardActions>
            <Box sx={{ width: 360, m: "auto", p: "auto" }}>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                sx={{ pr: 2 }}
              >
                <BottomNavigationAction
                  label="Top Up"
                  icon={<ControlPointIcon />}
                />
                <BottomNavigationAction
                  label="Transfer"
                  icon={<DriveFolderUploadIcon />}
                />
                <BottomNavigationAction
                  label="Tarik Tunai"
                  icon={<BrowserUpdatedIcon />}
                />
                <BottomNavigationAction
                  label="Riwayat"
                  icon={<HistoryIcon />}
                />
              </BottomNavigation>
            </Box>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}
