import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
//import material
import {
  Container,
  Typography,
  Divider,
  Box,
  Grid,
  ListItemText,
  TextField,
} from "@mui/material";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import navbar
import Navbar from "../component/Navbar";
import Button from "../component/Button";
// Import React router
import { Link } from "react-router-dom";
import { useStyles } from "./Style";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 390,
    },
  },
};
// const TextFieldDate = {
//   textFieldDate: {
//     style: {
//       width: "100%",
//       fontSize: 12,
//       height: 34.5,
//       border: "1.5px solid",
//       borderColor: "grey",
//       borderRadius: 7,
//     },
//   },
// };
// const DatePicker = {
//   datePicker: {
//     style: {
//       height: 1.4,
//       backgroundColor: "#249EA0",
//     },
//   },
// };

const names = [
  "Rp 20.000",
  "Rp 50.000",
  "Rp 100.000",
  "Rp 150.000",
  "Rp 200.000",
];

function getStyles(name, personName, theme, img) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Debit() {
  const theme = useTheme();
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

  const [nominal, setNominal] = React.useState("");
  const [nomor, setNomor] = React.useState("");
  const [tanggal, setTanggal] = React.useState("");
  const [ccv, setCcv] = React.useState("");

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log(
      `\n`,
      `Nominal: ${personName}`,
      `\n`,
      `Nomor: ${nomor}`,
      `\n`,
      `Tanggal: ${tanggal}`,
      `\n`,
      `Ccv: ${ccv}`
    );
  };
  const handleNominal = (event) => {
    setPersonName(event.target.value);
    console.log(event.target.value);
  };
  const classes = useStyles();

  return (
    <div>
      <Container sx={{ minWidth: 430 }}>
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
            secondary="Maks. Saldo DOMPETKU Cash RP 10.000.000 "
          />
          <Divider sx={{ width: 438, ml: -3, border: 1, color: "#249EA0" }} />
        </Box>

        <form onSubmit={handleSubmit} autocomplete="off">
          {/* 1.) pilih nominal */}
          <FormControl sx={{ width: 390, mt: 3 }}>
            <Select
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <>Pilih Nominal</>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* info */}
          <Typography
            sx={{ mt: 5 }}
            style={{ fontSize: 18, fontWeight: "bold" }}
          >
            Informasi Kartu
          </Typography>
          <Typography sx={{ mt: 3 }}>
            Saat ini kami hanya menerima kartu debit yang
            <br /> sudah aktif 3D secure
          </Typography>

          {/* 1 */}
          <TextField
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Nomor Kartu "
            sx={{ width: 390, mt: 2 }}
            InputProps={{ disableUnderline: true }}
            value={nomor}
            onChange={(e) => setNomor(e.target.value)}
            fullWidth
          />

          {/* 2 */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={tanggal}
              onChange={(newTanggal) => {
                setTanggal(newTanggal);
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    width: 390,
                    mt: 2,
                  }}
                  placeholder="Masa Berlaku"
                  fullWidth
                  {...params}
                  className={classes.textFieldCalendar}
                />
              )}
              className={classes.datePicker}
            />
          </LocalizationProvider>

          {/* 3 */}
          <TextField
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="CCV "
            sx={{ width: 390, mt: 2 }}
            InputProps={{ disableUnderline: true }}
            value={ccv}
            onChange={(e) => setCcv(e.target.value)}
            fullWidth
            helperText="3 digit terakhir pada bagian belakang kartu anda"
          />

          {/* Button Lanjutkan */}
          <Grid item xs={12} sx={{ mb: 2 }}>
            <Button type="submit" autocomplete="off" />
          </Grid>
        </form>
      </Container>
    </div>
  );
}
