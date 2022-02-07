import React from "react";
//import material
import {
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
// import button
import ButtonGroup from "@mui/material/ButtonGroup";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//import icon
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import HistoryIcon from "@mui/icons-material/History";

export default function BasicCard() {
  return (
    <div>
      <Container>
        <Card sx={{ minWidth: 320, mt: 5 }}>
          <CardContent>
            <Typography sx={{ fontSize: 16 }} color="text.secondary">
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
              sx={{ mt: 1, mb: 1.5, fontSize: 16 }}
              color="text.secondary"
            >
              Point 9841
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              color="inherit"
              sx={{ m: "auto" }}
            >
              <Button>
                <ControlPointIcon sx={{ mb: 5 }} />
              </Button>
              <Typography sx={{ mt: 5, ml: -5 }} style={{ fontSize: 15 }}>
                Top Up
              </Typography>
              <Button>
                <DriveFolderUploadIcon sx={{ mb: 5, ml: 2 }} />
              </Button>
              <Typography sx={{ mt: 5, ml: -3 }} style={{ fontSize: 15 }}>
                Transfer
              </Typography>
              <Button>
                <BrowserUpdatedIcon sx={{ mb: 5 }} />
              </Button>
              <Typography sx={{ mt: 5, ml: -3 }} style={{ fontSize: 15 }}>
                Tarik Tunai
              </Typography>
              <Button>
                <HistoryIcon sx={{ mb: 5 }} />
              </Button>
              <Typography sx={{ mt: 5, ml: -3 }}>Riwayat</Typography>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}
