import React from "react";
//import material
import {
  Container,
  Typography,
  Divider,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  TextField,
  MenuItem,
  Checkbox,
  InputLabel,
} from "@mui/material";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import navbar
import Navbar from "../component/Navbar";
// Import React router
import { Link } from "react-router-dom";
// import icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Rp 10.000",
  "Rp 20.000",
  "Rp 50.000",
  "Rp 100.000",
  "Rp 150.000",
  "Rp 200.000",
];

export default function Debit() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <Container sx={{ width: 430 }}>
        <Link to="/topup">
          <Navbar>Top Up - Kartu Debit</Navbar>
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
            secondary="Maks. Saldo DOMPETKU Cash RP.10.000.000 "
          />
          <Divider sx={{ width: 438, ml: -3, border: 1, color: "#249EA0" }} />
        </Box>

        {/* 1.) pilih nominal */}
        <FormControl sx={{ m: 1, ml: 0, width: 390 }}>
          <Accordion
            sx={{ mt: 2 }}
            style={{
              //border radius
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              overflow: "hidden",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ fontWeight: "bold" }}>
                Pilih Nominal
              </Typography>
            </AccordionSummary>
            <Divider
              variant="fullWidth"
              sx={{ width: 398, ml: 0, mt: 0, mb: 2 }}
            />

            <AccordionDetails
              expandIcon={<ExpandMoreIcon />}
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </AccordionDetails>
          </Accordion>
        </FormControl>

        {/* info */}
        <Typography sx={{ mt: 5 }} style={{ fontSize: 18, fontWeight: "bold" }}>
          Informasi Kartu
        </Typography>
        <Typography sx={{ mt: 3 }}>
          Saat ini kami hanya menerima kartu debit yang
          <br /> sudah aktif 3D secure
        </Typography>

        {/*  */}
        <TextField
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Nomor Kartu "
          sx={{ width: 390, mt: 2 }}
        />
        <TextField
          placeholder="Masa Berlaku "
          multiline
          sx={{ width: 390, mt: 2 }}
        />
        <TextField
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="CCV "
          sx={{ width: 390, mt: 2 }}
          helperText="3 digit terakhir pada bagian belakang kartu anda"
        />

        {/* Button Lanjutkan */}
        <Box sx={{ mt: 15 }}>
          <Button
            variant="contained"
            color="warning"
            sx={{ width: 400, mt: 15, m: "auto" }}
          >
            Top Up
          </Button>
        </Box>
      </Container>
    </div>
  );
}
