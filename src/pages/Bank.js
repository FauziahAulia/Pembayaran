import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
//import material
import {
  Container,
  Typography,
  TextField,
  Grid,
  Box,
  Button,
  AppBar,
  Snackbar,
  Alert,
} from "@mui/material";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "../component/Navbar";
// Import React router
import { Link } from "react-router-dom";
import axios from "axios";

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
const names = [
  {
    name: "BNI",
    img: require("../assets/Image/bni.png"),
  },
  {
    name: "BCA",
    img: require("../assets/Image/bca.png"),
  },
  {
    name: "Mandiri",
    img: require("../assets/Image/mandiri.png"),
  },
  {
    name: "BRI",
    img: require("../assets/Image/bri2.png"),
  },
  {
    name: "BSI",
    img: require("../assets/Image/bsi2.png"),
  },
];
// const names = ["BNI", require("../assets/Image/bni.png"), "BCA", "Mandiri", "BRI", "BSI"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SaveButton = styled(Button)({
  transition: " 1ms smooth",
  marginTop: 0,
  marginBottom: 20,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  letterSpacing: "1px",
  width: "95%",
  padding: "11px 81px",
  lineHeight: 1.5,
  backgroundColor: "#F78104",
  fontFamily: [
    "Roboto",
    "poppins",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  "&:hover": {
    backgroundColor: "#F78104",
    padding: "11px 81px",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#F78104",
    borderColor: "#F78104",
  },
  "&:focus": {
    boxShadow: "#F78104",
  },
});

export default function Bank() {
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
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const [bank, setBank] = React.useState("");
  const [nomor, setNomor] = React.useState("");
  const saldo = "Rp 8.345.000";
  const [transfer, setTransfer] = React.useState("");
  const [pesan, setPesan] = React.useState("");

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log(
      `\n`,
      `Bank: ${personName}`,
      `\n`,
      `Nomor: ${nomor}`,
      `\n`,
      `Saldo: ${saldo}`,
      `\n`,
      `Transfer: ${transfer}`,
      `\n`,
      `Pesan: ${pesan}`,
      `\n`
    );
    const json = {
      selectBank: personName,
      accountNumber: nomor,
      balance: saldo,
      transferAmount: transfer,
      message: pesan,
    };
    axios.post("http://localhost:8000/profile", json).then((result) => {
      console.log(result);
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Container sx={{ minWidth: 430 }}>
        <Link to="/transfer">
          <Navbar>Ke Rekening Bank</Navbar>
        </Link>
        <form onSubmit={handleSubmit} autocomplete="off">
          <FormControl sx={{ minWidth: 400, mt: 6 }}>
            <Select
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <>Pilih Bank</>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              {names.map(({ name, img }) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}

                  <Img
                    src={img}
                    key={img}
                    value={img}
                    sx={{
                      width: "16%",
                      height: "16%",
                      mr: 2,
                      textAlign: "right",
                    }}
                  />

                  {/* {img.map((img) => (
                    <Img
                      alt="Profile Picture"
                      src={img}
                      key={img}
                      value={img}
                      sx={{
                        width: 45,
                        height: 18,
                        mr: "auto",
                        textAlign: "right",
                      }}
                    />
                  ))} */}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* 2.) Rekening */}
          <TextField
            type="number"
            placeholder="No Rekening"
            sx={{ minWidth: 400, mt: 2 }}
            value={nomor}
            onChange={(e) => setNomor(e.target.value)}
            fullWidth
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
            <Typography sx={{ ml: 2, mt: 1 }} style={{ color: "#249EA0" }}>
              Saldo
            </Typography>
            <Typography
              sx={{ ml: 3, mt: 0 }}
              style={{ fontSize: 21, color: "#249EA0" }}
            >
              {saldo}
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
            <Typography sx={{ ml: 2, mt: 1 }} style={{ color: "#249EA0" }}>
              Nominal Transfer
            </Typography>
            <Typography
              sx={{ ml: 2, mt: 0, mb: 1 }}
              style={{ fontSize: 21, color: "#249EA0" }}
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
                <TextField
                  fullWidth
                  size="small"
                  value={transfer}
                  onChange={(e) => setTransfer(e.target.value)}
                />
              </Box>
            </Typography>
          </Grid>

          {/* 5.) Pesan  */}
          <TextField
            placeholder="Pesan (Opsional) "
            multiline
            rows={4}
            sx={{ minWidth: 400, mt: 2 }}
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            fullWidth
          />

          {/* Button Lanjutkan */}
          <Box sx={{ mt: 8 }}>
            <AppBar
              position="fixed"
              sx={{
                top: "auto",
                bottom: 0,
                bgcolor: "transparent",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  margin: "auto",
                  textAlign: "center",
                  width: "95%",
                }}
              >
                <SaveButton
                  input
                  type="submit"
                  onClick={handleClick}
                  variant="contained"
                  disableRipple
                >
                  Lanjutkan
                </SaveButton>
              </Box>
            </AppBar>

            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%", mb: 7 }}
              >
                Terkirim!
              </Alert>
            </Snackbar>
          </Box>
        </form>
      </Container>
    </div>
  );
}
